

//MAY BE USED?

//DELETE IF UNUSED!!!



$(document).keypress(function(event){
		var whichKey=String.fromCharCode(event.which)
	
		if(whichKey=='x'){
			$(".ui").fadeToggle()
			$("#stats").fadeToggle()
			$("#infoButton").fadeToggle()
			
			var curse = $('body').css('cursor')
			if(curse == 'auto'){
				$('body').css('cursor', 'none');
			}else{
				$('body').css('cursor', 'auto');
			}
		}
		if(whichKey=='z'){
			console.log(current)
		}
		
		if(whichKey=='a'){
			console.log(current.audio.freqByteData)
		}
		
		if(whichKey=='p'){
			current.enter(current)	
		}
		if(whichKey == 'q'){
			animate = null	
		}
		
		if(whichKey == 'z'){
			//console.log(camera)
			//console.log(controls)
			//camera.lookAt(scene.position)
			var temp = new THREE.Vector3(1,0,0)
			var dif = new THREE.Vector3 (
				camera.position.x-current.scene.position.x,
				camera.position.y-current.scene.position.y,
				camera.position.z-current.scene.position.z
			)
		
			dif.normalize()
			console.log(dif)
			console.log(controls.forward)
			controls.forward.add(dif)
			
			//console.log(controls.forward)
			//controls.rotateHorizontally()
		}
		
 })
 
 function toggleBlogInfo(){
	$("#info.blog").slideToggle('slow');	
}

function toggleTravelLog(){
	$("#travelLog").slideToggle('slow');	
}