const Memory = require('./memory');

const memory = new Memory();

class MyArray {

	constructor() {
		this.length = 0;
		this._capacity = 0;
		this.ptr = memory.allocate(this.length);
	}

	push(value) {
		if(this.length >= this._capacity) {
			this._resize((this.length + 1) * MyArray.RESIZE_RATIO);
		}

		memory.set(this.ptr + this.length, value);
		this.length = this.length + 1;
	}

	pop() {
		if(this.length === 0) {
			throw new Error('Index Out of Bounds');
		}
		let value = memory.get(this.ptr + this.length-1);
		this.length--;
		return value;
	}

	insert(index, value) {
		if(index < 0 || index >= this.length) {
			throw new Error('Index Out of Bounds');
		}
		if(this.length >= this._capacity) {
			this._resize((this.length + 1) * MyArray.RESIZE_RATIO);
		}

		memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
		memory.set(this.ptr + index, value);
		this.length = this.length + 1;
	}

	remove(index) {
		if(index < 0 || index >= this.length) {
			throw new Error('Index Out of Bounds');
		}
		memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
		this.length = this.length - 1;
	}

	_resize(size) {
		const oldPointer = this.ptr;
		this.ptr = memory.allocate(size);
		if(this.ptr === null) {
			throw new Error('Out of memory');
		}
		memory.copy(this.ptr, oldPointer, this.length);
		memory.free(oldPointer);
		this._capacity = size;

	}

	get(index) {
		if(index < 0 || index >= this.length) {
			throw new Error('Index Out of Bounds');
		}
		return memory.get(this.ptr + index);
	}
}

MyArray.RESIZE_RATIO = 3;

function main() {

	let arr = new MyArray();


	arr.push(0);

	//console.log(arr); -> MyArray { length: 1, capacity: 3, ptr: 0 }

	arr.push(5);
	arr.push(15);
	arr.push(19); // -> length >= capacity, so size is increased by (length + 1 * 3) i.e (3 + 1) * 3 = 12
	arr.push(45);
	arr.push(10);

	//console.log(arr); -> MyArray { length: 6, capacity: 12, ptr: 3 }

	arr.pop();
	arr.pop();
	arr.pop();

	//console.log(arr); -> MyArray { length: 3, capacity: 12, ptr: 3 }

	/**
	 * The length is reduced by 3, but the capacity remains 12 and the current pointer to the head of our
	 * array in memory remains where it is, as there is no need to resize or allocate the array again.
	 */

	//console.log(arr.get(0)); -> prints '0';

	/* remove remainging elements */

	arr.pop();
	arr.pop();
	arr.pop();

	//console.log(arr);

	arr.push('tauhida');

	//console.log(arr.get(0));

	/**
	 * We cannot push a string on to a memory which only accepts float64.
	 */

	/**
	 * The resize function allocates a new pointer for the head of our array in memory, then copies over the
	 * original array and changes it's capacity to the product of our RESIZE_RATIO and the new length.
	 */
}

main();