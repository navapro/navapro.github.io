// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let runArray = [];
let attackArray = [];
let zombieWalkArray = [];
let zombieDeadArray = [];
let run1, run2, run3, run4, run5, run6, run7, run8, run9, run10;
let attack0, attack1, attack2, attack3, attack4, attack5, attack6, attack7, attack8, attack9;
let zombie0,zombie1,zombie2,zombie3,zombie4,zombie5;
let zombieDead0,zombieDead1,zombieDead2,zombieDead3,zombieDead4,zombieDead5,zombieDead6,zombieDead7;
let fighter, fighterAttack;
let img;
let state = 'notAttack';
let heroX, heroY;
let zombieX,zombieY;
let attackCounter = 0;
let movingForward = false;
let movingBackwards = false;
let jumping = false;
let attackkk = true;
let collide = false;
let zombieSpeed;

function preload() {
  loadRun();
  loadAttack();
  loadZombie1();
  loadZombie1Dead();
}


function setup() {
  let cnv = createCanvas(windowWidth,windowHeight);
  // positions canvas 50px to the right and 100px
  // https://p5js.org/reference/#/p5.Element/position//https://www.youtube.com/watch?v=OIfEHD3KqCg//
  // cnv.position(50, 100);
  zombieSpeed = 0.05;

  runArray = [run1, run2, run3, run4, run5, run6, run7, run8, run9, run10];
  attackArray = [attack0, attack1, attack2, attack3, attack4, attack5, attack6, attack7, attack8, attack9];
  zombieWalkArray = [zombie0,zombie1,zombie2,zombie3,zombie4,zombie5];
  zombieDeadArray = [zombieDead0,zombieDead1,zombieDead2,zombieDead3,zombieDead4,zombieDead5,zombieDead6,zombieDead7];

  fighter = new Run(runArray, windowWidth / 4, windowHeight / 2, .4); // new run neede or let run
  fighterAttack = new Attack(attackArray, heroX, heroY, .2);
  zombie = new zombieRun(zombieWalkArray, windowWidth , windowHeight / 2, zombieSpeed);
  deadZombie = new zombieDead (zombieDeadArray, windowWidth , windowHeight / 1.5,0.2);
}

function draw() {

  background(img);
  if (collide === false){
  zombie.show();
  zombie.moveForward();}

  if (collide === true){
    deadZombie.dead();
    zombie.reset();
    zombieSpeed += .0002;
    zombie = new zombieRun(zombieWalkArray, windowWidth , windowHeight / 2, zombieSpeed);
  }
  if (state === 'notAttack') {
    fighter.show();
    collide = false;

    if (movingForward) {
      fighter.moveForward();
    }
    if (movingBackwards) {
      fighter.moveBackward();
    }
    if (jumping) {
      fighter.jump();
    }
  }
  if ( state === 'attack') {
    
    fighterAttack.hit();
    attackCounter += .1;
    fighterAttack.gravity();
    collide = collideRectRect(heroX,heroY,250,300,zombieX,zombieY,200,300);
  }
  if (attackCounter > 5) {
    state = 'notAttack';
    attackCounter = 0;
  }
  fighter.gravity();
  noFill();
  stroke('red');
//  rect(heroX,heroY,250,200)
//  rect(zombieX,zombieY,200,200)
}


function keyPressed() {

  if (keyCode === 32) {
    //atackkk = trute;
    state = 'attack';
  }
  else {
   state = 'notAttack';
  }
  if (keyCode === 39) {
    movingForward = true;
  }
  if (keyCode === 37) {
    movingBackwards = true;
  }
  if (keyCode === 38) {
    jumping = true;
  }
}

function keyReleased() {
  if (keyCode === 39) {
    movingForward = false;
  }
  if (keyCode === 37) {
    movingBackwards = false;
  }
  if (keyCode === 38) {
    jumping = false;
  }
  //if (keyCode === 32) {
   // attackkk = false;
  // }

}
