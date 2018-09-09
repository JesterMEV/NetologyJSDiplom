'use strict';

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    if(!(vector instanceof Vector)){
      throw new Error ('Можно прибавлять к вектору только вектор типа Vector');
    }
    return new Vector(this.x + vector.x, this.y + vector.y)
  }

  times(factor = 1) {
    return new Vector(this.x * factor, this.y * factor);
  }
}

class Actor{
  constructor(pos = new Vector(0, 0), size = new Vector(1, 1), speed = new Vector(0, 0)){
  	if(!(pos instanceof Vector)){
  		throw new Error ('Можно прибавлять к вектору только вектор типа Vector');
  	}
  	if(!(size instanceof Vector)){
  		throw new Error ('Можно прибавлять к вектору только вектор типа Vector');
  	}
  	if(!(speed instanceof Vector)){
  		throw new Error ('Можно прибавлять к вектору только вектор типа Vector');
  	}
	  this.pos = pos;
	  this.size = size;
	  this.speed = speed;
  }

  act(){

  	
  }

  get left(){
  	return this.pos.x;
  }

  get right(){
  	return this.pos.x;
  }

  get top(){
  	return this.pos.y;
  }

  get bottom(){
  	return this.posy;
  }

  get type(){
	  	return 'actor';
	  }

}

// class Level{

// }
const grid = [
  new Array(3),
  ['wall', 'wall', 'lava']
];
const level = new Level(grid);
runLevel(level, DOMDisplay);