function firstNonRepeatedChar(str) {
	let found = false;
	for (let i = 0; i < str.length; i++) {
		if(str.charAt(i)!=str.charAt(i+1)){
			found = true;
			return str.charAt(i)
		}else{
			i++;
		}
	}
	
	if(!found)return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
