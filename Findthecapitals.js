var capitals = function (word) {
	let pro = []
	word.split("").forEach(function(elt){
	    if(elt !== elt.toLowerCase()){
	        pro.push(word.indexOf(elt))
	    }
	})
	
	return pro
};