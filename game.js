'use strict';

class Vector{
  constuctor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }

  plus(){

  }
}

// class Actor{

// }

// class Level{

// }

const grid = [
  new Array(3),
  ['wall', 'wall', 'lava']
];
const level = new Level(grid);
runLevel(level, DOMDisplay);
