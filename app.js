

var movePlayer = _.throttle((function (event) {
    switch (event.keyCode) {
    case 83:
      moveCharacter('top', '#player', _.add);
      break;
    case 87:
      moveCharacter('top', '#player', _.subtract);
      break;
    case 65:
      moveCharacter('left', '#player', _.subtract);
      break;
    case 68:
      moveCharacter('left', '#player', _.add);
      break;
  }
}), 600);

window.addEventListener("keydown", function (event) {
  movePlayer(event);
});

function moveCharacter(dir, character, fn) {
  var coord = d3.select(character).style(dir);
  coord = _.stripPixel(coord);
  coord = fn(+coord, 200) + 'px'; 
  d3.select(character).style(dir, coord);
}

function moveBots() {
  var bots = d3.selectAll('.bots')[0];
  for (var i = 0;i < bots.length;i++) {
    var dir = _.sample(['top', 'left']);
    var fn = _.sample([_.add, _.subtract]);
    moveCharacter(dir, bots[i], fn);
   }
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
  .attr('class', 'bots');

setInterval(moveBots, 900);
