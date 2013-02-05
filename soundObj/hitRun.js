

/*

	CCCCCC	OOOOOO	TTTTTTTTTT	OOOOOO			LL		OOOOOO	CCCCCC	OOOOOO
	CC		OO	OO		TT		OO	OO			LL		OO	OO	CC		OO	OO
	CC		OO	OO		TT		OO	OO			LL		OO	OO	CC		OO	OO
	CC		OO	OO		TT		OO	OO			LL		OO	OO	CC		OO	OO
	CCCCCC	OOOOOO		TT		OOOOOO			LLLLLL	OOOOOO	CCCCCC	OOOOOO


*/

var rasG_cotoLoco =	{
	
	
	title:"Ras G - Coto Loco",
	file:"rasG_cotoLoco.mp3",
	info:"Any description of the L.A. beat scene would be incomplete with a least one review of a Ras G track.  One of the founders of Poobah records and all around musical badass Ras G is of paramount importance to the music currently coming from LA. In the track 'Coto Loco' ,  Ras G demonstrates that on any given day he can produce beats that are as weighty as they are subtle. By using empty space to precisely build tension 'Coto Loco' becomes a minimal yet significant track. The pounding pulse of bass hits are accompanied by cackling wood blocks and deep undertones. The electric turkey knife of a bassline tears through multiple octaves, sliding up and down as it carves through the meat of the song, yet the track is so brawny that even this destruction does nothing to hinder the forward momentum of the colossal track.",
	img:"img/galaxies/laGalaxy/hitRun/roadKillVol1.png",
	links:[
		["Poobah - Ras G","http://poobah.com/rasg"],
		["Road Kill Vol. 1","http://thehitandrun.bandcamp.com/album/road-kill-vol-1"]
	],
	 
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:20,
		type:planetLib.type.sphere(300,15,15),
		dataType:planetLib.type.sphere(300,15,15),
		material:planetLib.material.colorNormal(0xa01010),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(20),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:20,
		type:planetLib.type.cube(1000,1000,1000),
		dataType:planetLib.type.cube(1000,1000,1000),
		material:planetLib.material.colorNormal(0x5c0c0c),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(20),	
	},
	
	
	//the dust for this solar system
	dust:dustLib.hnrSS,
	
	
	//SECTIONS
	sections:[
		{	
			//vis of First Section!
			sun:{
				vertex:sunLib.visual.vertex.freqBuldge
			},
			planet:{
				vertex:planetLib.visual.vertex.hackNight8,
				rotation:planetLib.visual.rotation.camPosZ
			},
			dust:{
				scale:dustLib.visual.scale.freqHalfLess_1,
				size:dustLib.visual.size.freq
			},
			
			//Time when the first section comes in
			time:0
		},
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:0,
		y:-3000,
		z:-2000
	}
}




/*

	GRIOTS

*/

var kutmahTehbis_griots =	{
	
	
	title:"Kutmah + Tehbis -  Griots",
	file:"kutmahTehbis_griots.mp3",
	img:"img/galaxies/laGalaxy/hitRun/roadKillVol3.png",
	info:"Featured on Kutmah's 'Worldwide Family vol. 2', Tehbis is a london based producer into 'soulful, beat orientated vibes.' It is no surprise then that his collaboration with Kutmah is exactly this. 'Griots' has everything from digital phaser blasts to solo sitar. Over the course of its heavy shuffle, Kutmah and Tehbis create textures filled with timbales and expansive synth patches. An accomplished blend of the analog and digital, it brings earthy samples into the world of spaceships and sine waves. Both artists are magnificent on their own, and one can only hope that more collaborations follow if they are as well put together as this.",
	links:[
		["Kutmah Website","http://kutmah.com/"],
		["Tehbis Soundcloud","https://soundcloud.com/tehbis"],
		["Road Kill Vol. 3","http://thehitandrun.bandcamp.com/album/road-kill-vol-3"],
	],
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:10,
		type:planetLib.type.sphere(200,10,10),
		dataType: planetLib.type.sphere(200,10,10),
		material:planetLib.material.imgMaterial("img/galaxies/laGalaxy/hitRun/hnrW.png"),
		position:planetLib.position.fullCircle(800,10),
		rotation:planetLib.rotation.fullCircleZ(10),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:10,
		type:planetLib.type.sphere(400,10,10),
		dataType:planetLib.type.sphere(400,10,10),
		material:planetLib.material.colorNormal(0xac1010),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircleZ(10),
	},
	
	
	//the dust for this solar system
	dust:dustLib.hnrSS,
	
	lights:{
		numOf:5,
		type:lightLib.type.point(0xff0000),
		position:lightLib.position.randomBox(1000)
		
	},
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
			//parts of the first section
			sun:{
				vertex:sunLib.visual.vertex.hackNight2,
			},
			planet:{
				vertex:planetLib.visual.vertex.hackNight5,
				rotation:planetLib.visual.rotation.camPosZ,
				
			},
			dust:{
				rotation:dustLib.visual.rotation.freqX,
				scale:dustLib.visual.scale.freqXYZ
			},
			light:{
				color:lightLib.visual.color.freqRed
			},
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:2000,
		y:0,
		z:-4000
	}
}



/*

	FLAKO - HOLE IN THE DARK

*/


var flako_holeInTheDark =	{
	
	
	title:"fLako - Hole In The Dark",
	file:"flako_holeInTheDark.mp3",
	img:"img/galaxies/laGalaxy/hitRun/roadKillVol3.png",
	info:"There is nothing more difficult than writing a review for a song you love. Not only do you feel like you can never do it justice, it is usually so engaging that you forget you are writing in the first place and lose yourself in the music. 'Hole in the Dark' is one of these songs. As soon as the first cymbal starts the track it consumes you. With a groove so deep you could land a jet in it, and melodic lines that ooze with emotion, Flako creates a truly powerful aural adventure. Articulate from beginning to end it is the perfect track for any activity that requires dedication as well as any situation where your only desire is to go as hard as physically possible. Flako's mastery extends far beyond the phenomenal track. Each track he puts out is a deftly crafted work of art, and it seems as though he has no plans for stopping.",
	links:[
		["Soundcloud","https://soundcloud.com/flako"],
		["Road Kill Vol. 3","http://thehitandrun.bandcamp.com/album/road-kill-vol-3"],
	],
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:50,
		type:planetLib.type.cube(500,200,200),
		dataType: planetLib.type.cube(500,200,200),
		material:planetLib.material.colorNormal(0x901010),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(50),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:1,
		type:sunLib.type.sphere(200,10,10),
		dataType:sunLib.type.sphere(200,10,10),
		material:planetLib.material.colorNormal(0x900000),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(1),	
	},
	
	
	//the dust for this solar system
	dust:dustLib.hnrSS,
	
	lights:{
		numOf:5,
		type: new THREE.DirectionalLight(0xffffff),
		position:lightLib.position.randomBox(200)
		
	},
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
			//vis of First Section!
			sun:{
				vertex:sunLib.visual.vertex.freqBuldge	
			},
			planet:{
				vertex:planetLib.visual.vertex.freqBuldge,
				rotation:planetLib.visual.rotation.camPosZ
			},
			dust:{
				scale:dustLib.visual.scale.freqXYZLess,
				rotation:dustLib.visual.rotation.nSteadyXNFreqZ
				
			},
			//Time when the first section comes in
			time:0
		},
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:-3000,
		y:0,
		z:5000
	}
}



/*

	Dexter Story EVERYTHING


*/

var dexterStory_everything =	{
	
	
	  title:"Dexter Story - Everything",
	  file:"dexterStory_everything.mp3",
	  img:"img/galaxies/laGalaxy/hitRun/roadKillVol3.png",
	  info:"Dexter Story's story is an impressive one indeed. Named after saxophonist Dexter Gordon, Story was a musician from birth. Since then he has worked in every aspect of the music industry from marketing director of Def Jams, to music composer for 'City LAX' and music director for 'Hurricane Season'. Being surrounded by talent for so many years probably has helped him grow in his aptitude for composition, but as his website states, 'Without deviation from the norm, progress is not possible.'  'Everything'  reflects this motto perfectly. Although it displays a refined understanding of the genre it exists within, the playful steel drums and meditative lyrics add flavor to an already interesting piece. Recently released album 'Seasons' displays the same level of maturity and imagination as 'Everything', so if your desire for soulful jams isn't satiated, you know where to look!",
	  links:[
		  ["Dexter Story Website","http://www.dexterstory.com/"],
		  ["Road Kill Vol. 3","http://thehitandrun.bandcamp.com/album/road-kill-vol-3"],
	  ],
	  
	  //TODO CREATE A VISUALIZE FUNCTION THAT IS BLANK, 
	  //BUT IS SWITCHED TO THE DIFFERENT 
	  //VISUALIZERS OF THE DIFFERENT SECTIONS
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:2000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:20,
		  type:planetLib.type.sphere(200,10,10),
		  dataType: planetLib.type.sphere(200,10,10),
		  material:planetLib.material.colorNormal(0xac1010),
		  position:planetLib.position.loopDLoop(500,20),
		  rotation:planetLib.rotation.fullCircle(20),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  numOf:1,
		  type:sunLib.type.sphere(100,10,10),
		  dataType:sunLib.type.sphere(100,10,10),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/hitRun/hnrW.png"),
	  },
	  
	  
	  //the dust for this solar system
	  dust:dustLib.hnrSS,
	  
	  lights:{
		  numOf:5,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.randomBox(200)
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:sunLib.visual.spike,
			  planet:{
				  position:planetLib.visual.position.freqZ,
				  rotation:planetLib.visual.rotation.camPosZ,
				  vertex:planetLib.visual.vertex.nFreqBuldge
				  
			  },
			  dust:{
				  scale:dustLib.visual.scale.freqZeroXYZ,
				  rotation:dustLib.visual.rotation.nSteadyXNFreqZ
			  },
			  light:{
				  color:lightLib.visual.color.freqWhite	
			  },
			  
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:-5000,
		  y:2000,
		  z:0
	  }
}


/*

	DEVONWHO - EMPTY SHELVES


*/



var devonwho_emptyShelves =	{
	
	
	  title:"Devonwho - Empty Shelves",
	  file:"devonwho_emptyShelves.mp3",	
	  img:"img/galaxies/laGalaxy/hitRun/roadKillVol3.png",
	  info:"Devonwho's beats always groove and glimmer. Like a video game Parliament, his tracks are alway full bodied anthems, with catchy melodies and  driving drums. In 'Empty Shelves' arpeggiated synths compliment the funky square-wave bassline. 8-bit trills flicker across the soundscape while snappy snares set the cadence. A member of the prestigious Klipmode Family, Devonwho is the type of artist whose songs can be played on repeat with little loss of interest or quality.",
	  links:[
		  ["Devonwho Website","http://devonwho.com/"],
		  ["Road Kill Vol. 3","http://thehitandrun.bandcamp.com/album/road-kill-vol-3"],
	  ],
	  
	  //TODO CREATE A VISUALIZE FUNCTION THAT IS BLANK, 
	  //BUT IS SWITCHED TO THE DIFFERENT 
	  //VISUALIZERS OF THE DIFFERENT SECTIONS
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:2000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:100,
		  type:planetLib.type.cube(500,100,20),
		  dataType: planetLib.type.cube(500,100,20),
		  material:planetLib.material.colorNormal(0x901010),
		  position:planetLib.position.fullSphere(500,100),
		  rotation:planetLib.rotation.fullCircle(20),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  numOf:10,
		  type:sunLib.type.sphere(100,10,10),
		  material:planetLib.material.colorNormal(0x901040),
	  },
	  
	  
	  //the dust for this solar system
	  dust:{
		  pNum:20,
		  fNum:20,
		  pPosition: dustLib.pPosition.ringX(1000,20),
		  pMaterial: dustLib.pMaterial.color(0xff0000,20),
		  fPosition: dustLib.fPosition.center(),
		  fRotation: dustLib.fRotation.rotX(2*Math.PI,20),
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:sunLib.visual.spike,
			  planet:{
				  rotation:planetLib.visual.rotation.freqXcamZ,
				  vertex:planetLib.visual.vertex.nBuldgeYZ
			  },
			  dust:{
				  rotation:dustLib.visual.rotation.steadyXfreqY,
				  scale:dustLib.visual.scale.freqXYZLess
			  },
			  
			  
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:2000,
		  y:1000,
		  z:5000
	  }
}


/*

	BEI RU  - BEKAA VALLEY HASH

*/


var beiRu_bekaaValleyHash =	{
	

	  title:"Bei Ru - Bekaa Valley Hash",
	  file:"beiRu_bekaaValleyHash.mp3",
	  img:"img/galaxies/laGalaxy/hitRun/roadKillVol1.png",
	  links:[
		  ["Bei Ru Website","http://beirumusic.com/"],
		  ["Road Kill Vol. 1","http://thehitandrun.bandcamp.com/album/road-kill-vol-1"],
	  ],
	  
	  //TODO CREATE A VISUALIZE FUNCTION THAT IS BLANK, 
	  //BUT IS SWITCHED TO THE DIFFERENT 
	  //VISUALIZERS OF THE DIFFERENT SECTIONS
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:2000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:20,
		  type:planetLib.type.sphere(500,10,10),
		  dataType: planetLib.type.sphere(500,10,10),
		  material:planetLib.material.colorNormal(0x901010),
		  position:planetLib.position.center(),
		  rotation:planetLib.rotation.fullCircle(20),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  numOf:1,
		  type:sunLib.type.cube(100,100,100),
		  dataType:sunLib.type.cube(100,100,100),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/hitRun/roadKillVol3.png"),
	  },
	  
	  
	  //the dust for this solar system
	  dust:dustLib.hnrSS,
	  
	  lights:{
		  numOf:1,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.randomBox(200)
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:{
				  vertex:sunLib.visual.vertex.freqBuldge
			  },
			  planet:{
				  position:planetLib.visual.position.freqXoffSet300,
				  rotation:planetLib.visual.rotation.freqXcamZ,
				  vertex:planetLib.visual.vertex.nFreqBuldge1,	
				  
			  },
			  dust:{
				  scale:dustLib.visual.scale.freqZeroXYZ,
				  rotation:dustLib.visual.rotation.nSteadyXNFreqZ
			  },
			  light:{
				  color:lightLib.visual.color.freqWhite	
			  },
			  
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:4000,
		  y:5000,
		  z:-2000
	  }
}