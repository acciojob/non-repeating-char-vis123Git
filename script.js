function firstNonRepeatedChar(str) {
	for (let i = 0; i < str.length; i++) {
		let j=i;
		let found = false;
		while (j<str.length && !found) {
			if(str.charAt(i) == str.charAt(j)){
				found = true;
			}
		}

		if(!found)return str.charAt(i);
		else return null;
		// if(str.charAt(i)!=str.charAt(i+1)){
		// 	found = true;
		// 	return str.charAt(i)
		// }else{
		// 	i++;
		// }
	}
	
	
	if(!found)return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
