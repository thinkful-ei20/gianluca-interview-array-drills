const filteringAnArray = arr => {
	const filtered = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > 5) {
			filtered.push(arr[i]);
		}
	}
	return filtered;
};

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6];
console.log(filteringAnArray(arr));

/**
 * Big-O of O(n)
 */