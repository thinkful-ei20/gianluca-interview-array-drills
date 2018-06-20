
const mergeArrays = (arr1, arr2) => {
	const merged = [];

	let i_1 = 0;
	let i_2 = 0;

	while(i_1 < arr1.length && i_2 < arr2.length) {
		if(arr1[i_1] < arr2[i_2]) {
			merged.push(arr1[i_1]);
			i_1++;
		} else {
			merged.push(arr2[i_2]);
			i_2++;
		}
	}
	while(i_1 < arr1.length) {
		merged.push(arr1[i_1]);
		i_1++;
	}
	while(i_2 < arr1.length) {
		merged.push(arr2[i_2]);
		i_2++;
	}
	return merged;
};

const arr1 = [1,2,2,5,6,7,12,16];
const arr2 = [4,5,6,7,8,9,10,12];
console.log(mergeArrays(arr1, arr2));

/**
 * Big-O of O(n)
 */