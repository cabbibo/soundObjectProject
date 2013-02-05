// JavaScript Document

var MISC ={
	
	//Starts the Application wherever the the url directs i to
	urlToCamPos:function(){
		window.startingCamPos = {x:0,y:0,z:0}
		var url = document.URL
		 
		var pathArray = url.split( '/' );
		
		var posURL = url.split( '#' );
		console.log(posURL)
		if (posURL[1]){
			var camPosURL = posURL[1]
			var camCoordinates = camPosURL.split('_')
			var x = camCoordinates[0].replace('#','')
			var y = camCoordinates[1]
			var z = camCoordinates[2]
			window.startingCamPos.x=parseFloat(x)
			window.startingCamPos.y=parseFloat(y)
			window.startingCamPos.z=parseFloat(z)
			
		}
		
		var leapURL =  url.split( '?' );
		if(leapURL.length == 2){
			console.log('leap called')
			window.leapControls = true
		}else {
			console.log('leap not called')
			window.leapControls = false
		}
	}
}

MISC.urlToCamPos();
