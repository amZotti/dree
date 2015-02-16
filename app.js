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
  coord = fn(+coord, 200) + 'px'; 
  d3.select(character).transition().style(dir, coord);
}

function rand(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return Math.floor(Math.random() * (end - start)) + start;
}


d3.select('main')
  .selectAll('.bots')
  .data(d3.range(15))
  .enter()
  .append('div')
  .style('top', function() { return rand(100, window.innerHeight)})
  .style('left', function() { return rand(100, window.innerWidth)})
  .attr('class', 'bots')
