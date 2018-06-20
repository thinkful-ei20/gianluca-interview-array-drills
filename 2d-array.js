
const zero2DArray = arr => {
	let w = arr.length;
	let h = arr[0].length;

	const coordinate = [];

	for(let i = 0; i < w; i++) {
		for(let j = 0; j < h; j++) {
			if(arr[i][j] === 0) {
				coordinate.push([j,i]);
			}
		}
	}

	for(let c = 0; c < coordinate.length; c++) {

		for(let x = 0; x < arr.length; x++) {
			if(coordinate[c][0] === x) {
				for(let y = 0; y < h; y++){
					arr[y][x] = 0;
				}
			}
		}

		for(let y = 0; y < arr.length; y++) {
			if(coordinate[c][1] === y){
				for(let x = 0; x < w; x++) {
					arr[y][x] = 0;
				}
			}
		}
	}
	return arr;
};

const arr = [
	[1,0,1,1,0],
	[0,1,1,1,0],
	[1,1,1,1,1],
	[1,0,1,1,1],
	[1,1,1,1,1]
];
console.log( zero2DArray(arr) );

/**
 * Big-O of O(n^3)
 */