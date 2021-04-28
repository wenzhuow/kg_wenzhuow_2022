function translate(int_string){
	var translated_string = "";
	var string_pool = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
	for (var i=0;i<int_string.length;i++){
		translated_string += string_pool[ parseInt(int_string[i]) ]
	}
	return translated_string
}

function readarg(){
	var int_array = process.argv.slice(2);
	var phonetic_array = [];
	for (var i = 0; i < int_array.length; i++) {
		phonetic_array.push(translate(int_array[i]));
	}
	return phonetic_array;
}

function output(content){
	text = "";
	for (var i = 0; i < content.length; i++) {
		text+=content[i]+","
	}
	console.log( text.slice(0,-1) )
}

var ans = readarg();
output(ans);
