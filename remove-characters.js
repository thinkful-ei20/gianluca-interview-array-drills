
const removeCharacters = (str, characters) => {
	let output = '';
	let match;
	for(let i = 0; i < str.length; i++) {
		match = false;
		for(let j = 0; j < characters.length; j++) {
			if(str[i]===characters[j]){
				match = true;
			}
		}
		if(!match) {
			output+=str[i];
		}
	}

	return output;
};

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

/**
 * Big-O of O(n^2)
 */