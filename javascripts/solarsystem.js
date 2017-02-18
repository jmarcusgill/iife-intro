var SolarSystem = (function(){

  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var dwarfPlanets = ["pluto"]
  var stars = ["Sun", "Alpha Centauri", "Wolf 359"]

  return {
    getDwarfPlanets : function() {
      return "they are rejects"
    },
    setDwardPlanets : function(lumpOfRock) {
      dwarfPlanets.push(lumpOfRock);
    },
  }
})();
