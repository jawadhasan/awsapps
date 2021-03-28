var app = function(){
	
	var counter = 0;
	
	function start(){	
	    counter++;
        console.log('changing time...');	
		document.getElementById("targetDiv").innerHTML = new Date().toString();
		document.getElementById("counterDiv").innerHTML = counter;		

	}
	
	return {
		start:start
	}
   
}();