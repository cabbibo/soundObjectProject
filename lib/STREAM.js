	
		
		
	
		
STREAM.prototype = {
	
	createAudio:function (){
		var audio = new Audio();
		audio.preload = "none"
		audio.src = this.file;
		audio.loop = true;
		//audio.id = audio.src.split(document.URL)[1].split('.mp3')[0]
		this.audio=audio
	},
	
	createSource:function() {
		this.source = this.musicContext.createMediaElementSource(this.audio);
		
		this.analyser= this.musicContext.createAnalyser();
		
		this.panner = this.musicContext.createPanner();
		
		this.panner.setPosition(
			this.whichSoundObj.globalPos.x,
			this.whichSoundObj.globalPos.y,
			this.whichSoundObj.globalPos.z
		);
		
		this.source.connect(this.panner)
		this.panner.connect(this.analyser)
		this.analyser.connect(gain)

	},
	
	start:function(){
			
		//if the source hasn't been created yet,
		//create it!
		
		//console.log(this)
		this.createAudio();	
		//console.log(this)
		var self = this
		setTimeout(function(){
			if(!self.source){
			 	console.log('undefined source')
				self.createSource();
				self.audio.play();

			}else{
				console.log('someSource')
	
				self.audio.play();
			}
		},10)
	
	},
		
	stop:function(){
		console.log('STOP CALLED')
		console.log(this)
		this.audio.pause();
		this.destroySource();
	
	},
	
	play:function(){this.audio.play();},
			
	destroySource:function(){
		this.analyser.disconnect(gain)
		this.panner.disconnect(this.analyser)
		this.source.disconnect(this.panner)
		
		this.source = undefined
		this.panner = undefined
		this.analyser = undefined
		this.audio = undefined
	},
	
	update:function(){
					 	
		this.freqByteData = new Uint8Array(this.analyser.frequencyBinCount)
		this.analyser.getByteFrequencyData(this.freqByteData)
		//console.log(freqByteData)
		
		for(var i=0;i<this.analyser.frequencyBinCount;i++){
			if(this.whichSoundObj.visualize){
				this.whichSoundObj.visualize(this.freqByteData[i],this.analyser.frequencyBinCount,i);
			}
		}
		
	
		this.musicContext.listener.setPosition(
			this.whichSoundObj.globalPos.x + (this.whichSoundObj.posToCamera.x/this.whichSoundObj.radius)*10,
			this.whichSoundObj.globalPos.y + (this.whichSoundObj.posToCamera.y/this.whichSoundObj.radius)*10,
			this.whichSoundObj.globalPos.z + (this.whichSoundObj.posToCamera.z/this.whichSoundObj.radius)*10
		)
		
		
		this.musicContext.listener.setOrientation(
			camera.direction.front.x,
			camera.direction.front.y,
			camera.direction.front.z,
			camera.direction.up.x,
			camera.direction.up.y,
			camera.direction.up.z
		)
		
		pannerDir = new THREE.Vector3(camera.position.x,camera.position.y,camera.position.z)
		pannerDir.normalize();
		
		this.panner.setOrientation(
			pannerDir.x,
			pannerDir.y,
			pannerDir.z
		)	
	},
	
	

		
	
}
		
function STREAM(whichSoundObj,file){
	
	//sets the musicContext equal to global music context
	this.musicContext = music
	
	//this.fileArray=[]
	this.file=file
	
	//Set the Solar System that the song belongs to
	this.whichSoundObj = whichSoundObj
	
	//gets just the track name, removing the mp3
	this.trackID= file.split('.')[file.split('.').length-2];
	
	//this.createAudio(); 
}
		