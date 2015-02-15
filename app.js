var movePlayer = _.throttle((function (event) {
    switch (event.keyCode) {
    case 83:
      moveCharacter('top', '#player', function(a, b) { return a + b});
      break;
    case 87:
      moveCharacter('top', '#player', function(a, b) { return a - b});
      break;
    case 65:
      moveCharacter('left', '#player', function(a, b) { return a - b});
      break;
    case 68:
      moveCharacter('left', '#player', function(a, b) { return a + b});
      break;
  }
}), 250);

window.addEventListener("keydown", function (event) {
  movePlayer(event);
});

function moveCharacter(dir, character, fn) {
  var coord = d3.select(character).style(dir);
  coord = coord.split("px").join(".").split(".")[0];
  coord = fn(+coord, 50) + 'px'; 
  d3.select(character).transition().style(dir, coord);
}
