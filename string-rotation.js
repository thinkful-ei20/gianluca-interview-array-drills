
const stringRotation = (str1, str2) => {
	if(str1.length !== str2.length) {
		return false;
	}
	if(str1 === str2) {
		return true;
	}

	for(let i = 0; i < str2.length; i++) {
		if((str1.slice(i) + str1.slice(0, i) === str2)) {
			return true;
		}
	}
	return false;
};

const str1 = 'amazon';
const str2 = 'azonam';
console.log(stringRotation(str1, str2));


/**
 * Big-O of O(n)
 */
