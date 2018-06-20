const products = arr => {

	const products = [];
	let prod;
	for(let i = 0; i < arr.length; i++) {
		prod = 1;
		for(let j = 0; j < arr.length; j++) {
			if(j !== i) {
				prod *= arr[j];
			}
		}
		products[i] = prod;
	}
	return products;
};

const arr = [1,3,9,4];
console.log(products(arr));

/**
 * Big-O of O(n^2)
 */