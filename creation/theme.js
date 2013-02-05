// JavaScript Document


/*
THEME.prototype = {
	
	init:function(){

			TODO
			
			function that chooses type using array
			
		
		
	
		
			
	}
	
	
	
}*/


//SOME ARRAYS 



themeArray = [ 'egg']

createTheme = function(whichObj){
		
		/*
		
			Set up planets first, for every type
		
		*/
		
		
		//maximum number of anything we can have. will change this around as needed
		var maxNum = 20
		
	
		
		//If there is no theme, assign a random one
		if(!whichObj.theme || whichObj.theme == 'random'){
			whichObj.theme = themeArray[Math.floor(Math.random()*themeArray.length)]
		}
		
	
		/*
		
			PLANET CREATION
		
		*/
		
		
		
		if(!whichObj.planets){
			whichObj.planets = {}
			//console.log('planets')
		}
		
		//Will assign dataType as well
		if(!whichObj.planets.type){
			getPlanetType(whichObj)
		}
		
		if(!whichObj.planets.material){
			getPlanetMaterial(whichObj)
		}
		
		if(!whichObj.planets.numOf){
			getPlanetNumOf(whichObj)
		}
		
		if(!whichObj.planets.position){
			getPlanetPosition(whichObj)
		}
		
		if(!whichObj.planets.rotation){
			getPlanetRotation(whichObj)
		}
			
			
		/*
		
			SUN CREATION
			
		*/
		
		if(!whichObj.suns){
			whichObj.suns = {}
		}
		
		
		//Will assign dataType as well
		if(!whichObj.suns.type){
			getSunType(whichObj)
		}
		
		if(!whichObj.suns.material){
			getSunMaterial(whichObj)
		}
		
		if(!whichObj.suns.numOf){
			getSunNumOf(whichObj)
		}
		
		if(!whichObj.suns.position){
			getSunPosition(whichObj)
		}
		
		if(!whichObj.suns.rotation){
			getSunRotation(whichObj)
		}
		
		
		
		
		
		if(!whichObj.dust){
			whichObj.dust = {}
		}
		
		
		//Will assign dataType as well
		if(!whichObj.dust.pNum){
			getPNum(whichObj)
		}
		
		if(!whichObj.dust.fNum){
			getFNum(whichObj)
		}
		
		if(!whichObj.dust.pPosition){
			getPPosition(whichObj)
		}
		
		if(!whichObj.dust.fPosition){
			getFPosition(whichObj)
		}
		
		if(!whichObj.dust.pMaterial){
			getPMaterial(whichObj)
		}
		
		if(!whichObj.dust.fRotation){
			getFRotation(whichObj)
		}
		
		
			
			
		
		/*
			Setting up Visuals
		*/
		if(!whichObj.sections){
			whichObj.sections = [{}]
		}



		
		
		if (!whichObj.sections[0].sun){
			if(whichObj.theme == 'egg'){
				randomVis = sunLib.randomVis({vertex:[1,2,3,4,6],position:[999]})
				whichObj.sections[0].sun = randomVis
			}
		}
		
		
		
		if (!whichObj.sections[0].planet){
			randomVis = planetLib.randomVis()
			whichObj.sections[0].planet = randomVis
		}
		
		if (!whichObj.sections[0].dust){
			randomVis = dustLib.randomVis({scale:[0,2]})
			whichObj.sections[0].dust = randomVis
		}
		
		
}


/*

PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET 

*/

function getPlanetNumOf(whichObj){
	if(whichObj.theme == 'egg'){
		whichObj.planets.numOf = Math.ceil(Math.random()*20)+10
	}
}

//Will assign dataType as well
function getPlanetType(whichObj){
	
	if(whichObj.theme =='egg'){
		var type = planetLib.randomType((whichObj.radius/10))
		
		whichObj.planets.type = type.type	
		whichObj.planets.dataType = type.dataType
		if(type.scale){
			whichObj.planets.scale = type.scale	
		}
	}

}


function getPlanetMaterial(whichObj){
	if(whichObj.theme == 'egg'){
		var materialRandom = Math.floor((Math.random()*2))
		if(materialRandom == 1){
			whichObj.planets.material = planetLib.material.colorNormal(whichObj.color)
		}else{
			whichObj.planets.material = planetLib.material.imgMaterial(whichObj.img)	
			if(!whichObj.lights){
				whichObj.lights = {}
				whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*10)
				whichObj.lights.numOf = 10// whichObj.numOf
				whichObj.lights.position = lightLib.position.randomBox(2*whichObj.radius);	
			}	
		}
	}
}



function getPlanetPosition(whichObj){
	if(whichObj.theme == 'egg'){
		whichObj.planets.position = planetLib.randomPosition(whichObj.radius/4,whichObj.planets.numOf)
	}
}


function getPlanetRotation(whichObj){
	if(whichObj.theme == 'egg'){
		whichObj.planets.rotation = planetLib.rotation.fullCircle(whichObj.planets.numOf)	
		
	}	
}


planetLib.randomPosition = function(size,numOf,possible){
	
	var array = [
		planetLib.position.center(),
		planetLib.position.boxRand(size),
		planetLib.position.fullCircle(size,numOf),
		planetLib.position.fullSphere(size,numOf),
		planetLib.position.loopDLoop(size,numOf),
		planetLib.position.lineX(size,numOf)
	]
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*9)
	}
	
	var toReturn = array[randomType]
	
	return toReturn
}


/*

SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN 

*/
function getSunType(whichObj){
	if(whichObj.theme =='egg'){
		var randomSolid = Math.floor(Math.random()*2)
		var type = planetLib.randomType(whichObj.radius*2,[0,1])
		whichObj.suns.type = type.type	
		whichObj.suns.dataType = type.dataType
	}
}

function getSunMaterial(whichObj){
	//if(whichObj.theme == 'egg'){
		var materialRandom = Math.floor((Math.random()*2))
		if(materialRandom == 1){
			whichObj.suns.material = planetLib.material.colorNormal(whichObj.color)
		}else{
			whichObj.suns.material = planetLib.material.imgMaterial(whichObj.img)	
			if(!whichObj.lights){
				whichObj.lights = {}
				whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*10)
				whichObj.lights.numOf =10// Math.ceil(Math.random()*10)
				whichObj.lights.position = lightLib.position.randomSphere(4*whichObj.radius);	
			}
			  
		}
		
	//}
	
}

function getSunNumOf(whichObj){
	if(whichObj.theme == 'egg'){
		whichObj.suns.numOf = Math.ceil(Math.random()*20)
	}	
}


function getSunPosition(whichObj){
	if(whichObj.theme == 'egg'){
		whichObj.suns.position = planetLib.position.center()
	}
}


function getSunRotation(whichObj){
	if(whichObj.theme == 'egg'){
		whichObj.suns.rotation = planetLib.rotation.fullCircle(whichObj.suns.numOf)	
	}	
}




/*

	DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST 


*/


function getPNum(whichObj){
	//if(whichObj.theme == 'egg'){	}
	whichObj.dust.pNum =Math.ceil(Math.random()*100) +50

}

function getFNum(whichObj){
	//if(whichObj.theme == 'egg'){}
	whichObj.dust.fNum =Math.ceil(Math.random()*20) +10
	
}

function getPPosition(whichObj){
	//if(whichObj.theme == 'egg'){}	
	whichObj.dust.pPosition = dustLib.randomPPosition(whichObj.radius/4,whichObj.dust.pNum,[0,1,3,4,7])	
	
}

function getPMaterial(whichObj){
	whichObj.dust.pMaterial =  dustLib.randomPMaterial(whichObj.radius/1000, whichObj.color,whichObj.img)
	//if(whichObj.theme == 'egg'){	}
}

function getFPosition(whichObj){
	//if(whichObj.theme == 'egg'){		}
	whichObj.dust.fPosition = dustLib.randomFPosition(whichObj.radius/2,whichObj.dust.fNum,[0,1,3,4,5])

}

function getFRotation(whichObj){
	if(whichObj.theme == 'egg'){}
	whichObj.dust.fRotation = dustLib.randomFRotation(whichObj.dust.fNum,Math.random()*Math.PI*2)
	
}




dustLib.randomPPosition = function(size,numOf,possible){
	
	var array = [
		dustLib.pPosition.randomBox(size),
		dustLib.pPosition.lineThroughX(size),
		dustLib.pPosition.lineX(size),
		dustLib.pPosition.ringX(size,numOf),
		dustLib.pPosition.jaggedLineX(size),
		dustLib.pPosition.nDependX(size),
		dustLib.pPosition.nJaggedDependX(size),
		dustLib.pPosition.chipX(size),
		dustLib.pPosition.sphere(size)
	]
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*9)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}

dustLib.randomFPosition = function(size,numOf,possible){
	
	var array = [
		dustLib.fPosition.randomBox(size),
		dustLib.fPosition.lineThroughX(size),
		dustLib.fPosition.straightLine(size),
		dustLib.fPosition.ringX(size,numOf),
		dustLib.fPosition.jaggedLineX(size),
		dustLib.fPosition.center(),
		dustLib.fPosition.sphere(size)
	]
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*7)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}

dustLib.randomPMaterial = function(size,color,img,possible){
	
	var array = [
		dustLib.pMaterial.color(color,size),
		dustLib.pMaterial.colorAdditive(color,size),
		dustLib.pMaterial.img(img,size),
		dustLib.pMaterial.imgAdditive(img,size),
	]
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*4)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}

dustLib.randomFRotation = function(numOf,degree,possible){
	
	var array = [
		dustLib.fRotation.noRotation(),
		dustLib.fRotation.xyRot(degree),
		dustLib.fRotation.rotX(degree,numOf),
		
	]
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*3)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}


/*
	dust:{
					pNum:200,
					fNum:200,
					pPosition: dustLib.pPosition.randomBox(100000),
					pMaterial: dustLib.pMaterial.color(0xff0000,1000),
					fPosition: dustLib.fPosition.randomBox(1000000),
					fRotation: dustLib.fRotation.noRotation(),
				},
				
*/		







/* 

	Have to set up this one up special so that the type and dataType are different geometries
	
*/

planetLib.randomType =  function(size,possible) {
	
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*6)
	}
	var toReturn = {}
	
	switch(randomType){
		case 0:
		toReturn.type = planetLib.type.cube(size,size,size)
		toReturn.dataType = planetLib.type.cube(size,size,size)
		break;
		
		case 1 :
		toReturn.type = planetLib.type.sphere(size,10,10)
		toReturn.dataType = planetLib.type.sphere(size,10,10)
		break;
		
		case 2:
		toReturn.type = planetLib.type.knot1(10,5,5),
		toReturn.dataType = planetLib.type.knot1(10,5,5),
		toReturn.scale = [size/1000,size/1000,size/1000]
		break;
		
		case 3:
		toReturn.type = planetLib.type.knot2(10,5,5),
		toReturn.dataType = planetLib.type.knot2(10,5,5),
		toReturn.scale = [size/1000,size/1000,size/1000]
		break;
		
		case 4:
		toReturn.type = planetLib.type.knot3(10,5,5),
		toReturn.dataType = planetLib.type.knot3(10,5,5),
		toReturn.scale = [size/1000,size/1000,size/1000]
		break;
		
		case 5:
		toReturn.type = planetLib.type.knot4(10,5,5),
		toReturn.dataType = planetLib.type.knot4(10,5,5),
		toReturn.scale = [size/1000,size/1000,size/1000]
		break;
	}
	
	
	
	return toReturn
}




/*

	VISUAL FUNCTIONS


*/


sunLib.rotationArray = [
	sunLib.visual.rotation.constantXpolarYZ, 
	sunLib.visual.rotation.positionBased,
	sunLib.visual.rotation.freqRotX
] 
sunLib.vertexArray = [
	sunLib.visual.vertex.spike,
	sunLib.visual.vertex.hackNight2,
	sunLib.visual.vertex.hackNight3,
	sunLib.visual.vertex.hackNight4,
	sunLib.visual.vertex.hackNight5,
	sunLib.visual.vertex.hackNight6,
	sunLib.visual.vertex.freqBuldge
]
	
sunLib.positionArray =[sunLib.visual.position.freqZpolarXY]	



sunLib.randomVis = function(){

	params = arguments[0]
	console.log(params)
	
	var vertex = Math.floor(Math.random()*(sunLib.vertexArray.length+1))
	
	if(params.vertex){
		vertex = params.vertex[Math.floor(Math.random()*(params.vertex.length))]
	}
	
	var rotation = Math.floor(Math.random()*(sunLib.rotationArray.length+1))
	
	if(params.rotation){
		rotation = params.rotation[Math.floor(Math.random()*(params.rotation.length))]
	}
	
	var position = Math.floor(Math.random()*(sunLib.positionArray.length+1))
	
	if(params.position){
		position = params.position[Math.floor(Math.random()*(params.position.length))]
	}
	
	
	toReturn = {}
	
	
	if(sunLib.vertexArray[vertex]){
		toReturn.vertex = sunLib.vertexArray[vertex]
	}
	
	if(sunLib.rotationArray[rotation]){
		toReturn.rotation = sunLib.rotationArray[rotation]
	}
	
	if(sunLib.positionArray[position]){
		toReturn.position = sunLib.positionArray[position]
	}	
	
	return toReturn	
}


	
	
/*
	
	PlanetLib Vertex Arrays

*/	
 
planetLib.vertexArray = [
	
	planetLib.visual.vertex.hackNight2,
	planetLib.visual.vertex.hackNight3,
	planetLib.visual.vertex.hackNight4,
	planetLib.visual.vertex.hackNight5,
	planetLib.visual.vertex.hackNight5_1,//
	planetLib.visual.vertex.hackNight6,
	planetLib.visual.vertex.hackNight7,
	planetLib.visual.vertex.hackNight7_small,
	planetLib.visual.vertex.hackNight8,
	planetLib.visual.vertex.hackNight9,
	planetLib.visual.vertex.hackNight9_small,	
	planetLib.visual.vertex.nFreqBuldge,
	planetLib.visual.vertex.nFreqBuldge1,
	planetLib.visual.vertex.nBuldgeYZ,
	planetLib.visual.vertex.nBuldgeYZ_small,
	planetLib.visual.vertex.freqBuldge
]


planetLib.rotationArray = [
	planetLib.visual.rotation.freqRotX, 
	planetLib.visual.rotation.freqXcamZ,
	planetLib.visual.rotation.camPosX,
	planetLib.visual.rotation.nCamPosX,
	planetLib.visual.rotation.camPosY,
	planetLib.visual.rotation.camPosZ,
	planetLib.visual.rotation.camPosZ0Y,
]
 

	
planetLib.positionArray =[
	planetLib.visual.position.out,
	planetLib.visual.position.outLoopD,
	planetLib.visual.position.outSphere,
	planetLib.visual.position.out300,
	planetLib.visual.position.out_large,
	planetLib.visual.position.in,
	planetLib.visual.position.freqZ,
	planetLib.visual.position.freqXOffset300,
	planetLib.visual.position.sinPlacement,
]	



planetLib.randomVis = function(){
	
	var toReturn ={}
	
	params = arguments[0]
	if(!params)params={}
	
	console.log(params)
	
	var vertex = Math.floor(Math.random()*(planetLib.vertexArray.length))
	
	if(params.vertex){
		vertex = params.vertex[	Math.floor(Math.random()*(params.vertex.length))]
	}
	
	var rotation = Math.floor(Math.random()*(planetLib.rotationArray.length+1))
	
	if(params.rotation){
		rotation = params.rotation[Math.floor(Math.random()*(params.rotation.length))]
	}
	
	var position = Math.floor(Math.random()*(planetLib.positionArray.length+1))
	
	if(params.position){
		position = params.position[Math.floor(Math.random()*(params.position.length))]
	}
	
	
	if(planetLib.vertexArray[vertex]){
		toReturn.vertex = planetLib.vertexArray[vertex]
	}
	
	if(planetLib.rotationArray[rotation]){
		toReturn.rotation = planetLib.rotationArray[rotation]
	}
	
	if(planetLib.positionArray[position]){
		toReturn.position = planetLib.positionArray[position]
	}	
	
	
	
	return toReturn	
}






/*

	Dust Vis

*/


 
dustLib.positionArray = [
	dustLib.visual.position.center,
]

dustLib.rotationArray = [
	dustLib.visual.rotation.freqX,
	dustLib.visual.rotation.freqY, 
	dustLib.visual.rotation.freqZ,
	dustLib.visual.rotation.nFreq,
	dustLib.visual.rotation.nFreqX,
	dustLib.visual.rotation.nSteadyXNFreqZ,
	dustLib.visual.rotation.steadyXfreqY
]
 

	
dustLib.scaleArray =[
	dustLib.visual.scale.freqXYZ,
	dustLib.visual.scale.freqXYZLess,
	dustLib.visual.scale.freqHalf,
	dustLib.visual.scale.freqHalfLess,
	dustLib.visual.scale.freqHalfLess_1,
	dustLib.visual.scale.freqZeroXYZ
]	

dustLib.sizeArray = [
	dustLib.visual.size.freq,
	dustLib.visual.size.freqLarge,
	dustLib.visual.size.freqNone,
]



dustLib.randomVis = function(){
	
	var toReturn ={}
	
	params = arguments[0]
	if(!params)params={}
	
	console.log(params)
	
	var scale = Math.floor(Math.random()*(dustLib.scaleArray.length))
	
	if(params.scale){
		scale = params.scale[Math.floor(Math.random()*(params.scale.length))]
	}
	
	var size = Math.floor(Math.random()*(dustLib.sizeArray.length))
	
	if(params.size){
		size = params.size[Math.floor(Math.random()*(params.size.length))]
	}
	
	var rotation = Math.floor(Math.random()*(dustLib.rotationArray.length+1))
	
	if(params.rotation){
		rotation = params.rotation[Math.floor(Math.random()*(params.rotation.length))]
	}
	
	var position = Math.floor(Math.random()*(dustLib.positionArray.length+1))
	
	if(params.position){
		position = params.position[Math.floor(Math.random()*(params.position.length))]
	}
	
	
	if(dustLib.scaleArray[scale]){
		toReturn.scale = dustLib.scaleArray[scale]
	}
	
	if(dustLib.sizeArray[size]){
		toReturn.size = dustLib.sizeArray[size]	
	}
	
	if(planetLib.rotationArray[rotation]){
		toReturn.rotation = dustLib.rotationArray[rotation]
	}
	
	if(planetLib.positionArray[position]){
		toReturn.position = dustLib.positionArray[position]
	}	
	
	
	
	return toReturn	
}