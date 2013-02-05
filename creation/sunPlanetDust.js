


var objectProto = {
	
	addToScene:function(whichOne){
		this.whichSoundObj.scene.add(this.array[whichOne])
	},
	
	removeFromScene:function(whichOne){
		this.whichSoundObj.scene.remove(this.array[whichOne])
	},
	
	addAll:function(){
		for(var i =0; i<this.array.length; i++){
			this.addToScene(i)
		}	
	},
	
	removeAll:function(){
		for(var i =0; i<this.array.length; i++){
			this.removeFromScene(i)
		}	
	},
	
}




DUST.prototype = objectProto
LIGHTS.prototype = objectProto
OBJECTS.prototype = objectProto

OBJECTS.prototype.init = function(){
	//Makes sure material is double sided
	this.params.material.side = THREE.DoubleSide
	this.params.material.transparent = true
	
	if(this.params.numOf){
		for(var i = 0; i< this.params.numOf;i++){
			
			var objToPush = new THREE.Mesh( this.params.type , this.params.material );
			
			if(this.params.position){
				var position = this.params.position(i)
				
				objToPush.position.x = position.x
				objToPush.position.y = position.y
				objToPush.position.z = position.z
			}
			
			if(this.params.rotation){
				var rotation = this.params.rotation(i)
				objToPush.rotation.x = rotation.x
				objToPush.rotation.y = rotation.y
				objToPush.rotation.z = rotation.z
			}
			
			this.array.push(objToPush)
			
			if(this.params.dataType){
	
				var dataToPush = new THREE.Mesh( this.params.dataType , this.params.material );
				
				dataToPush.position.x = objToPush.position.x
				dataToPush.position.y = objToPush.position.y
				dataToPush.position.z = objToPush.position.z
				
				dataToPush.rotation.x = objToPush.rotation.x
				dataToPush.rotation.y = objToPush.rotation.y
				dataToPush.rotation.z = objToPush.rotation.z
			
				this.dataArray.push(dataToPush)
			}
			
		}
	}else{
			
		  var objToPush = new THREE.Mesh( this.params.type , this.params.material );
		  
		  if(this.params.rotation){
			  var position = this.params.position(0)
			  
			  objToPush.position.x = position.x
			  objToPush.position.y = position.y
			  objToPush.position.z = position.z
		  }
		  
		  if(this.params.rotation){
			  var rotation = this.params.rotation(0)
			  objToPush.rotation.x = rotation.x
			  objToPush.rotation.y = rotation.y
			  objToPush.rotation.z = rotation.z
		  }
		  
		  this.array.push(objToPush)
		  
		  if(this.params.dataType){
  
			  var dataToPush = new THREE.Mesh( this.params.dataType , this.params.material );
			  
			  dataToPush.position.x = objToPush.position.x
			  dataToPush.position.y = objToPush.position.y
			  dataToPush.position.z = objToPush.position.z
			  
			  dataToPush.rotation.x = objToPush.rotation.x
			  dataToPush.rotation.y = objToPush.rotation.y
			  dataToPush.rotation.z = objToPush.rotation.z
		  
			  this.dataArray.push(dataToPush)
		  }
	}

	
	
	this.data = this.dataArray[0]
		
}

function OBJECTS(whichSoundObj,params){
	
	this.whichSoundObj = whichSoundObj
	
	this.array=[]
	this.dataArray=[]
	this.params = params
	
	this.init()
	
	this.data = this.dataArray[0]

	
}


	

function DUST (whichSoundObj,dustParameters){
	this.whichSoundObj = whichSoundObj
	
	this.material = dustParameters.pMaterial 
	
	this.pGeometry = new THREE.Geometry();
	
	for ( i = 0; i < dustParameters.pNum; i ++ ) {
			
			var pos = dustParameters.pPosition(i)
			
			var vertex = new THREE.Vector3();
			vertex.x = pos.x
			vertex.y = pos.y
			vertex.z = pos.z
			
			this.pGeometry.vertices.push( vertex );

	}
	
	
	this.array=[]
	this.dataArray=[]
	
	this.initDust = function(){
		for ( var i=0; i < dustParameters.fNum; i++ ) {	
	
			var particles = new THREE.ParticleSystem( this.pGeometry, this.material );
			var dParticles = new THREE.ParticleSystem( this.pGeometry, this.material );
					
			
			var pos = dustParameters.fPosition(i)
		
			particles.position = pos
			dParticles.position = pos
			
			var rot = dustParameters.fRotation(i)
			
			particles.rotation = rot
			dParticles.rotation = rot
	  
			this.array.push(particles)
			this.dataArray.push(dParticles)
		
		}
	}
	
	this.initDust();
	

}


function LIGHTS(whichSoundObj, lightParameters){
	
	
	this.whichSoundObj = whichSoundObj
	this.array =[]
	
	for(var i = 0; i<lightParameters.numOf; i++){
		
		var newLight = lightParameters.type
		if(lightParameters.color){
			newLight.color.r = 	 lightParameters.color.r
			newLight.color.g = 	 lightParameters.color.g
			newLight.color.b = 	 lightParameters.color.b
		}
	
		var position = lightParameters.position(i)
	
		
		if(lightParameters.direction){
			var direction = lightParameters.direction(i)
		}
		
		newLight.position.x = position.x
		newLight.position.y = position.y
		newLight.position.z = position.z
		
	
		
		this.array.push(newLight)	
		
		
	}
	
	
	
		
}
