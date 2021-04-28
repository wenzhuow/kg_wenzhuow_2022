function translate(int_string){
	var translated_string = "";
	var string_pool = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
	for (var i=0;i<int_string.length;i++){
		translated_string += string_pool[ parseInt(int_string[i]) ]
	}
	return translated_string
}
