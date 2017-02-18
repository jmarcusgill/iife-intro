var SolarSystem = (function(){

  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var dwarfPlanets = ["pluto"]
  var numPlanetsPeopleLandedOn = 0;
  var stars = ["Sun", "Alpha Centauri", "Wolf 359"]
  var age = 0

  return {
    getPlanets : function() {
      return planets;
    },
    getPlanetsLandedPeopleOn : function() {
      return numPlanetsPeopleLandedOn;
    },
    setPlanetsLandedPeopleOn : function() {
      numPlanetsPeopleLandedOn++;
    },
    getDwarfPlanets : function() {
      return "they are rejects"
    },
    setDwardPlanets : function(lumpOfRock) {
      dwarfPlanets.push(lumpOfRock);
    },
    getStars : function() {
      return stars;
    },
    setStars : function(newStar) {
      stars.push(newStar);
    },
    getSolarSystemAge : function() {
      return age;
    },
    setSolarSystemAge : function() {
      age++
    }
  }


})();

// console.log("Planets: ",SolarSystem.getPlanets())

// console.log("Planets with people on them: ", SolarSystem.getPlanetsLandedPeopleOn());

// console.log("Spaceships: ", SolarSystem.getSpaceShips());

// console.log("Spaceships: ", SolarSystem.setSpaceShips("UFO"))
// SolarSystem.setSpaceShips("Voyeger 1")
// SolarSystem.setSpaceShips("Voyeger 2")
// SolarSystem.setSpaceShips("Gemini")
// SolarSystem.setSpaceShips("Apollo")
// console.log("Spaceships: ", SolarSystem.getSpaceShips());
