var app = function(){
	
	var counter = 0;
	
	function start(){	
	    counter++;
        console.log('changing time...');	
		document.getElementById("targetDiv").innerHTML = new Date().toString();
		document.getElementById("counterDiv").innerHTML = counter;		

	}

	
	function getWeatherData(){
		
			clearOutput();
		
		$.ajax({
		  url: "http://18.196.23.241/netcoreapp/weatherforecast/",
		  type: 'GET',
		  success: function(data){
				  
				 console.log(data);
				 $('pre').html(JSON.stringify(data, undefined, 2));				
			  },
			  
			error: function(data){
				console.log(data);
				 $('pre').html(JSON.stringify(data, undefined, 2));	
			},
		  dataType: 'json'
		});
	}
	
	
	function clearOutput(){
		$('pre').html('');
		$('pre').html('Loading....');
	}
	
		function getWeatherDataPrivate(){
		
		clearOutput();	
		
		$.ajax({
		  url: "http://10.0.2.136:5000/weatherforecast/",
		  type: 'GET',
		  success: function(data){				 		 
				 console.log(data);
				 $('pre').html(JSON.stringify(data, undefined, 2));				
			  },
		error: function(data){
			console.log(data);
			 $('pre').html(JSON.stringify(data, undefined, 2));	
		},
		  dataType: 'json'
		});
	}
	
	
	
	
	
	return {
		start:start,
		getWeatherData:getWeatherData,
		getWeatherDataPrivate:getWeatherDataPrivate
		
	}
   
}();