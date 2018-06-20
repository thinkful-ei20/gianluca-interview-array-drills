
const maxSum = arr => {
	let sum = 0;
	let max = 0;
	for(let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		if( sum < 0 ) sum = 0;
		if( max < sum ) max = sum;
	}
	return max;
};
const arr = [4,6,-3,5,-2,1];
console.log(maxSum(arr));

/**
 * Big-O of O(n)
 */