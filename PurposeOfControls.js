(function() {

	function walk(node) { 
		
		if(node.title !== undefined && node.title != "") {
			var newElement = document.createElement('span')
			newElement.innerHTML = node.title
			newElement.style = "background-color: black; color:white; position:absolute; top:0px; left:0px;"
			node.appendChild(newElement)
			node.style += " position:relative;"
		}


		for (let child of node.childNodes) {  
			walk(child) 
		} 
	}

	walk(document.body)

})()