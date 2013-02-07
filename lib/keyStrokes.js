

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
		
		
 })
 
 function toggleBlogInfo(){
	$("#info.blog").slideToggle('slow');	
}

function toggleTravelLog(){
	$("#travelLog").slideToggle('slow');	
}