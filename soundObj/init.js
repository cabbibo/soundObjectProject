
		/*
			This is where the galaxy is defined.
			Most likely will  put this in a new file
			as soon as other galaxys start getting made...
			
			
			
			KEEP IN MIND:
			
			For some CRAZY reason, each object must be its own variable before it is declared as a child. Probably because of a 'this' issue
			
		*/
		
	
		
		
		var dublab = {
			position:{
				x:-20000,
				y:-20000,
				z:0
			},
			
			
			title:"dublab",
			file:"austinPeralta_epilogueRenaissanceBubbles.mp3",
			info:"dublab is a non-profit web radio collective devoted to the growth of  positive music, arts and culture. We have been broadcasting independently since 1999. Our audience of turned-on listeners connect from around the world. dublab's mission is to share beautiful music via the world's best djs. What you hear on dublab crosses genres and defies classification. Unlike traditional radio, the dublab djs have total freedom of selection. You will experience many different sounds, but find they all have the same soulful root. We have extended our creative action to include art exhibits, film projects, event production and record releases.<br/><br/>A collective of the planet's most progressive music selectors. Whether bringing dance floors to a boil, exploring magic experimentalism or spinning far-out, eclectic sets the dublab soundsystem reflects all shades of future roots sound.",	
			img:"img/galaxies/laGalaxy/dublab/clusterLogo.png",
			links:[["dublab","http://dublab.com/"]],
			
			
			
			radius:10000,
			dust:{
					pNum:200,
					fNum:20,
					pPosition: dustLib.pPosition.randomBox(10000),
					pMaterial: dustLib.pMaterial.imgAdditive("img/galaxies/laGalaxy/dublab/dublabTrans.png",50),
					fPosition: dustLib.fPosition.randomBox(10000),
					fRotation: dustLib.fRotation.noRotation(),
				},//dustLib.dublabSS,
			sections:[
				{	
				
					dust:{
						rotation:dustLib.visual.rotation.freqX,
						scale:dustLib.visual.scale.freqXYZ
					},
					
					//Time when the first section comes in
					time:0
				},
				
			],
			
			children:[
				matthewdavid_tomorrowspirit,
            	daedelus_dntFkSgr,
            	kutmah_songSong, 
            	dntel_sundial, 
            	take_wonderMansFlask, 
            	flyingLotus_backpackCaviar, 
			]	
			
		}
		
		var brainfeeder = {
			
			
			title:"Brainfeeder",
			file:"austinPeralta_epilogueRenaissanceBubbles.mp3",
			info : "Brainfeeder is an independent record label based in Los Angeles, California, founded by Flying Lotus in 2008, focusing on electronic music and instrumental hip hop. It has signed artists such as Flying Lotus, Daedelus, Lorn, Ras G, Samiyam, The Gaslamp Killer, Austin Peralta, Thundercat, Mono/Poly, Teebs, Martyn, Lapalux, Strangeloop, Taylor McFerrin, Jeremiah Jae and Tokimonsta.",
			links:[["Brainfeeder Website","http://brainfeedersite.com"]],

			radius:10000,
			
			dust:dustLib.brainfeederSS,
			//the Sun for this solar system
			suns:{
				type:sunLib.type.cube(20000,20000,20000),
				dataType:sunLib.type.cube(20000,20000,20000),
				material:planetLib.material.colorNormal(0xa0a000),
			},
		
			
			sections:[
				{	
				
					dust:{
						rotation:dustLib.visual.rotation.freqX,
						scale:dustLib.visual.scale.freqXYZ
					},
					
					//Time when the first section comes in
					time:0
				},
				
			],
			
			children:[
				teebs_doubleFifths,
				austinPeralta_epilogueRenaissanceBubbles,
				flyingLotus_hunger,
				flyingLotus_doTheAstralPlane,
				lapalux_gutterGlitter,
				thundercat_forLove,
				tokimonsta_brightShadows,
			]	
			
		}
		
		
		var fof = {
			position:{
				x:20000,
				y:20000,
				z:0
			},
			
			
			title:"Friends of Friends",
			file:"pcoat_division.mp3",
			info:"While the music industry is getting a much needed make-over, for fans there lies a fresh opportunity to change the way we value and understand music as a whole. The Internet in many ways has been 'the great equalizer' for both artists and music fans giving us all new opportunities to release, buy and receive music. Artists are able to reach new listeners with ease, while interested fans have plenty of avenues to express their own voices online and discover something new. And while people aren't buying music at the stores at the same rate as in the past, they certainly are willing to support the people that make art they love. Fans still want something tangible and by evidence of current blog/Twitter culture, are seeming just as interested in the story and method as they are in the final product.<br/><br/>Thus leads way to the introduction of a new type of label called FoF Music (Friends of Friends), the name itself is the driving force behind the label and website, referring to the most effective way (yet traditional way!) people learn about new music: through Friends! The hope is to help re-invent how music is released in a way that is not only more involving for the artist (A&R, artwork, marketing) but more importantly truly enticing for the fans. We want to create releases that are inspiring for artists and fans alike; with the intention to create a product that is not a useless plastic memory holder but rather is worth the hard earned money spent to create and purchase.<br/><br/>Be on the lookout for the goodies to come via FoF Music!",
			img:"img/galaxies/laGalaxy/fof/clusterLogo.png",
			links:[
				["Friends Of Friends Website","http://www.fofmusic.net/"],
				["Bandcamp","http://fofmusic.bandcamp.com/"]	
			],
			
			 
			  //This is the distance away
			  //when the music starts playing
			  radius:10000,
			  
			  
				  //The Planets for this solar system
			  planets:{
				  numOf:20,
				  type:planetLib.type.cube(20000,20000,20000),
				  dataType: planetLib.type.cube(20000,20000,20000),
				  material:planetLib.material.colorNormal(0x700070),
				  position:planetLib.position.center(),
				  rotation:planetLib.rotation.fullCircle(20),	
			  },
			  
			  
			  //the Sun for this solar system
			  suns:{
				  type:sunLib.type.cube(1000,1000,1000),
				  dataType:sunLib.type.cube(1000,1000,1000),
				  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/showMeTheFuture.png"),
			  },
			  
			  
			  
			  //the dust for this solar system
			 dust:dustLib.fofSS,
			  
			  
			  lights:{
				  numOf:1,
				  type: new THREE.DirectionalLight(0xffffff),
				  position:lightLib.position.center
				  
			  },
			  
			  //SECTIONS OF SOLAR SYSTEM 1
			  sections:[
				  {	
					  //parts of the first section
					  sun:{
						  vertex:sunLib.visual.vertex.freqBuldge,
					  },
					  planet:{
						  rotation:planetLib.visual.rotation.freqRotX,	
						  vertex:planetLib.visual.vertex.nFreqBuldge1,
						  //position:planetLib.visual.position.orbit,
					  },
					  dust:{
						  position:dustLib.visual.position.center,
						  rotation:dustLib.visual.rotation.nFreq,
						  scale:dustLib.visual.scale.freqXYZLess,
						  size:dustLib.visual.size.freq,
						  
					  },
					  light:{
						  position:lightLib.visual.position.freq,
						  color:lightLib.visual.color.freqWhite
					  },
					  //Time when the first section comes in
					  time:0
				  },
			
				  
			  ],
	  
	 
			children:[
				jonwayne_maxwellsSilverHammer,
				salva_thatGirl,
				shlohmo_crewLove,
				shlohmo_rainedTheWholeTime,
				lolBoys_genieInABottle,
				octoOcto_smoothWest,
				djao_timeToStopWaiting
			]
			
		}
		
		
		
		var hitRun = {
			position:{
				x:0,
				y:0,
				z:30000,
				
			},
			
			title:"Hit + Run",
			img:"img/galaxies/laGalaxy/hitRun/clusterLogo.png",
			file:"austinPeralta_epilogueRenaissanceBubbles.mp3",
			info: "HIT + RUN, the world's leader in live screenprinting, was created in 2005 by Southern California artists Brandy Flower and Mike Crivello. A product of the contagious enthusiasm they had seen at small silkscreening parties in their homes, HIT + RUN's live screenprinting events quickly grew, and today the Crew can be found at everything from Coachella, to the Super Bowl, to Art Basel, SXSW and more.<br/><br/>At each HIT + RUN event, Flower and Crivello act as curators, selecting from their network of artists to create an exclusive, one-of-kind art experience for all types of events.",
			links:[
				["Hit and Run Website","http://thehitandrun.com/"],
				["Soundcloud","https://soundcloud.com/hit-run"],
				["Bandcamp","http://thehitandrun.bandcamp.com/"],
			],
				
			dust:{
					pNum:200,
					fNum:20,
					pPosition: dustLib.pPosition.ringX(10000,200),
					pMaterial: dustLib.pMaterial.imgAdditive("img/galaxies/laGalaxy/hitRun/clusterLogo.png",150),
					fPosition: dustLib.fPosition.center(),
					fRotation: dustLib.fRotation.rotX(2*Math.PI,20),
			},
			radius:10000,
			
			sections:[
				{	
				
					dust:{
						rotation:dustLib.visual.rotation.freqX,
					},
					
					
					//Time when the first section comes in
					time:0
				},
				
			],
			children:[
				rasG_cotoLoco,
				flako_holeInTheDark,
				dexterStory_everything,
				devonwho_emptyShelves,
				beiRu_bekaaValleyHash,
				kutmahTehbis_griots
			
			]
		}
		
	var laGalaxy = {
				id:"laGalaxy",
				title:"Los Angeles Galaxy",
				info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
				file:"teebs_gratitude.mp3",
				img:"img/galaxies/laGalaxy/laLogo.png",
				
				links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
				
				
				//stops progoation of theme
				theme:'none',
				
				children:[
					dublab,
					brainfeeder,
					fof,
					hitRun
				],
				
				
				//particle system for the galaxy
				dust:{
					pNum:200,
					fNum:20,
					pPosition: dustLib.pPosition.randomBox(100000),
					pMaterial: dustLib.pMaterial.colorAdditive(0xff0000,1000),
					fPosition: dustLib.fPosition.randomBox(20000),
					fRotation: dustLib.fRotation.noRotation(),
				},
				
			  
				
				sections:[
					{	
					
						dust:{
							rotation:dustLib.visual.rotation.freqX,
							scale:dustLib.visual.scale.freqXYZ
						},
						
						planets:{
							 vertex:planetLib.visual.vertex.nFreqBuldge1,	
						},
						
						
						//Time when the first section comes in
						time:0
					},
				
				],
				radius:100000,
				position:{
					x:-0000,
					y:0,
					z:0,
					
				}
				
			
	}
		
		


var testGalaxy_1_3_1 = {
	file:"kendrickLamar_theArtOfPeerPressure.mp3"
}
var testGalaxy_1_3_2 = {
	file:"kendrickLamar_m.a.a.dCity.mp3"
}
var testGalaxy_1_3_3 = {
	file:"kendrickLamar_backseatFreestyle.mp3"
}

var testGalaxy_1_3 = {
			  file:"cabbibo_onlyRealWind.mp3",
			  children:[testGalaxy_1_3_1,testGalaxy_1_3_2,testGalaxy_1_3_3,]
			  
			}
	
var testGalaxy_1_2_1 = {
	file:"kendrickLamar_theArtOfPeerPressure.mp3"
}
var testGalaxy_1_2_2 = {
	file:"kendrickLamar_m.a.a.dCity.mp3"
}
var testGalaxy_1_2_3 = {
	file:"kendrickLamar_backseatFreestyle.mp3"
}


var testGalaxy_1_2 = {
			  file:"cabbibo_galaxEye.mp3",
			   children:[testGalaxy_1_2_1,testGalaxy_1_2_2,testGalaxy_1_2_3,]
}


var testGalaxy_1_1 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_mountainNight.mp3",
			  img:"img/switzIII/swissIII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			  
	
}

var testGalaxy_3_3_1 = {
	file:"kendrickLamar_theArtOfPeerPressure.mp3"
}
var testGalaxy_3_3_2 = {
	file:"kendrickLamar_m.a.a.dCity.mp3"
}
var testGalaxy_3_3_3 = {
	file:"kendrickLamar_backseatFreestyle.mp3"
}



var testGalaxy_3_3 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_mountainNight.mp3",
			  img:"img/switzIII/swissIII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			  children:[testGalaxy_3_3_1,testGalaxy_3_3_2,testGalaxy_3_3_3,]
			  
}
	
var testGalaxy_3_2_1 = {
	file:"kendrickLamar_theArtOfPeerPressure.mp3"
}
var testGalaxy_3_2_2 = {
	file:"kendrickLamar_m.a.a.dCity.mp3"
}
var testGalaxy_3_2_3 = {
	file:"kendrickLamar_backseatFreestyle.mp3"
}


var testGalaxy_3_2 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_mountainNight.mp3",
			  img:"img/switzIII/swissIII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			 children:[testGalaxy_3_2_1,testGalaxy_3_2_2,testGalaxy_3_2_3,]
			  
	
}

var testGalaxy_3_1_1 = {
	file:"kendrickLamar_theArtOfPeerPressure.mp3"
}
var testGalaxy_3_1_2 = {
	file:"kendrickLamar_m.a.a.dCity.mp3"
}
var testGalaxy_3_1_3 = {
	file:"kendrickLamar_backseatFreestyle.mp3"
}

var testGalaxy_3_1 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_mountainNight.mp3",
			  img:"img/switzIII/swissIII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
				children:[testGalaxy_3_1_1,testGalaxy_3_1_2,testGalaxy_3_1_3,]
			  
	
}


var testGalaxy_2_3 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_mountainNight.mp3",
			  img:"img/switzIII/swissIII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			  
	
}
var testGalaxy_2_2 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_mountainNight.mp3",
			  img:"img/switzIII/swissIII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			  
	
}

var testGalaxy_2_1 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_mountainNight.mp3",
			  img:"img/switzIII/swissIII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			  
	
}



var testGalaxy_3 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_shanesSpot.mp3",
			  img:"img/switzIII/swissII.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			children:[testGalaxy_3_1,testGalaxy_3_2,testGalaxy_3_3]

			  
	
}


var testGalaxy_2 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_branchBossa.mp3",
			  img:"img/switzIII/swissI.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
			  children:[testGalaxy_2_1,testGalaxy_2_2,testGalaxy_2_3]
			  
	
}


var testGalaxy_1 = {
			 
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_pattern.mp3",
			  img:"img/switzIII/swissI.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
				
			  color:0xa070a0,
			  children:[
			  	testGalaxy_1_1,
				testGalaxy_1_2,
				testGalaxy_1_3
			  ]
			  
	
}


var testGalaxy = {
			 
			 
			
				
				//particle system for the galaxy
				//dust:dustLib.hnrSS,
				
				
				
			  id:"testGalaxy",
			  info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
			  file:"cabbibo_polarExcess.mp3",
			  img:"img/switzIII/swissI.png",
			  links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
				
			
			  theme:'egg',
			  children:[
			  	testGalaxy_1,
				testGalaxy_2,
				testGalaxy_3
			  ],
			  
			  
			 // radius:200000,
				
			  
	
}



var testVerse = {
				id:"testVerse",
				info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
				title:"EÄ",
				file:"theField_overTheIce.mp3",
				img:"img/hoverCube.png",
				links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
				
				
				
				color:0xaaaaaa,
				
				children:[
					laGalaxy,
					testGalaxy
				],
				
				//particle system for the galaxy
				dust:{
					pNum:200,
					fNum:20,
					pPosition: dustLib.pPosition.randomBox(1000000),
					pMaterial: dustLib.pMaterial.colorAdditive(0xff0000,1000),
					fPosition: dustLib.fPosition.randomBox(500000),
					fRotation: dustLib.fRotation.noRotation(),
				},
				
				sections:[
					{	
					
						dust:{
							rotation:dustLib.visual.rotation.freqX,
							scale:dustLib.visual.scale.freqXYZ
						},
						
						//Time when the first section comes in
						time:0
					},
				
				],
				
				radius:800000,
				
				position:{
					x:-500000,
					y:0,
					z:0,
				}
	}
		
	
	
var secretChild = {
	file:"cabbibo_belieber.mp3",
	dust:{
				pNum:20,
				fNum:200,
				pPosition: dustLib.pPosition.randomBox(10000),
				pMaterial: dustLib.pMaterial.colorAdditive(0x0000ff,100),
				fPosition: dustLib.fPosition.randomBox(10000),
				fRotation: dustLib.fRotation.noRotation(),
			},
}
	
var secretVerse = {
			file:"cabbibo_belieber.mp3",
			//particle system for the galaxy
			dust:{
				pNum:20,
				fNum:200,
				pPosition: dustLib.pPosition.randomBox(100000),
				pMaterial: dustLib.pMaterial.colorAdditive(0x0000ff,1000),
				fPosition: dustLib.fPosition.randomBox(100000),
				fRotation: dustLib.fRotation.noRotation(),
			},
			
			children:[secretChild],
			secret:true,
			radius:50000,
			
			position:{
				x:0,
				y:0,
				z:50000000,
			}
		
	}	
		
var multiVerse = {
				id:"MultiVerse",
				info:"This one's for <a href='http://thehitandrun.com/' target='_blank'>CREW</a>",
				title:"EÄ",
				file:"theField_overTheIce.mp3",
				img:"img/hoverCube.png",
				links:[
					["New York Times","http://www.nytimes.com/2010/05/30/arts/music/30lotus.html?pagewanted=all&_r=0"],
					["LA Weekly","http://www.laweekly.com/2011-11-03/music/low-end-theory-anniversary/"]
				],
				
				
				theme:'none',
				color:0xaaaaaa,
				
				children:[
					testVerse,
					secretVerse
				],
				
				//particle system for the galaxy
				dust:{
					pNum:200,
					fNum:200,
					pPosition: dustLib.pPosition.randomBox(10000000),
					pMaterial: dustLib.pMaterial.colorAdditive(0xff0000,10000),
					fPosition: dustLib.fPosition.randomBox(10000000),
					fRotation: dustLib.fRotation.noRotation(),
				},
				
				sections:[
					{	
					
						dust:{
							rotation:dustLib.visual.rotation.freqX,
							scale:dustLib.visual.scale.freqXYZ
						},
						
						//Time when the first section comes in
						time:0
					},
				
				],
				
				radius:30000000,
				
				position:{
					x:0,
					y:0,
					z:0,
				}
}