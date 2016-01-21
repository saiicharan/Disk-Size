"use strict"

class Sector {
	constructor(sectorNumber) {
		this.sectorNumber = sectorNumber
	}
	sizeOfSector() {
		return 512
	}
}

class Track {
	constructor(sectorCollections) {
		this.sectorCollections = sectorCollections
		this.initialSize = 0
	}
	sizeOfTrack() {
		this.sectorCollections.forEach((eachSector) => {
			this.initialSize += eachSector.sizeOfSector()
		})		
		return this.initialSize	
	}
}

class Platter {
	constructor(trackCollections) {
		this.trackCollections = trackCollections
		this.initialSizeOfPlatter = 0
	}
	sizeOfPlatter() {
		this.trackCollections.forEach((eachTrack) => {
			this.initialSizeOfPlatter += eachTrack.sizeOfTrack()
		})		
		return this.initialSizeOfPlatter
	}
}

class Size {
	constructor(platterCollections) {
		this.platterCollections = platterCollections
		this.initialSizeOfMainDisk = 0
	}
	sizeOfDisk() {
		this.platterCollections.forEach((eachPlatter) => {
			this.initialSizeOfMainDisk += eachPlatter.sizeOfPlatter()
		})		
		return this.initialSizeOfMainDisk
	}	
}


let sector1 = new Sector(1)
let sector2 = new Sector(2)
let sector3 = new Sector(3)
let sector4 = new Sector(4)

let track1 = new Track([sector2,sector1])
let track2 = new Track([sector3])
let track3 = new Track([sector4])

let platter1 = new Platter([track1,track2])
let platter2 = new Platter([track3])

let diskSize = new Size([platter1,platter2])
let size = diskSize.sizeOfDisk()

console.log('The size of the hard disk is ' + size/1024 +'MB')