

const urlifyString = str => {
	let urlStr = '';
	for(let i = 0; i < str.length; i++) {
		if(str[i]===' ') {
			urlStr += '%20';
		} else {
			urlStr += str[i];
		}
	}
	return urlStr;
};

console.log(urlifyString('tauhid parveen'));
console.log(urlifyString('www.thinkful.com /tauh ida parv een'));

/**
 * Big-O of O(n)
 */