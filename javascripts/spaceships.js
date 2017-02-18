var SolarSystem = (function(oldSolarSystem){

    var spaceShips = [];

    oldSolarSystem.getSpaceShips = function() {
      return spaceShips;
    };
    oldSolarSystem.setSpaceShips = function(newShip) {
      spaceShips.push(newShip);
    };
    oldSolarSystem.wreckSpaceShips = function() {
      spaceShips.pop();
    };


  return oldSolarSystem
})(SolarSystem || {});