// var outside = "global";

// function scopeStuff() {
//   var inside = "local";
//   console.log("outside from inside the function", outside);
//   console.log("inside from inside the function", inside);
// }

// console.log("outside from outside the function", outside);
// // console.log("inside from outside the function", inside);

// scopeStuff();


var global_base = 500;
(function throwAway (){
  global_base += 500;
  // console.log(global_base);
})();

// throwAway();


//function Expression, stores the function in a variable that can be called
var cats = (function(){
  var color = "black"; //properties
  var type = "tiger";
  var name = "fluffy";

  return {
    getColor : function() {
      return color; //makes things not private
    },
    getType : function() {
      return type;
    },
    setColor : function(newColor) {
      color = newColor;
    }
  }
})();

console.log(cats.getType());