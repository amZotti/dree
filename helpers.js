_.add = function(a,b) {
  return a + b;
};

_.subtract = function(a,b) {
  return a - b;
};

_.stripPixel = function(coord) {
  return coord.split("px").join(".").split(".")[0];
}
