// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let runArray = [];
let attackArray = [];
let run1, run2, run3, run4, run5, run6, run7, run8, run9, run10;
let attack0, attack1, attack2, attack3, attack4, attack5, attack6, attack7, attack8, attack9;
let fighter, fighterAttack;
let img
let state = 'notAttack';
let heroX, heroY;
let attackCounter = 0;
let movingForward = false;
let movingBackwards = false;
let jumping = false;
let attackkk = true;

function preload() {
  loadRun();
  loadAttack();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  runArray = [run1, run2, run3, run4, run5, run6, run7, run8, run9, run10];
  attackArray = [attack0, attack1, attack2, attack3, attack4, attack5, attack6, attack7, attack8, attack9];

  fighter = new Run(runArray, windowWidth / 4, windowHeight / 2, .4); // new run neede or let run
  fighterAttack = new Attack(attackArray, heroX, heroY, .2);
}

function draw() {

  background(img);

  if (state === 'notAttack') {
    fighter.show();

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
  if ( attackkk) {
    //state === 'attack'
    fighterAttack.hit();
    attackCounter += .1;
    fighterAttack.gravity();
  }
  if (attackCounter > 5) {
    attackkk = false;
    //state = 'notAttack';
    attackCounter = 0;
  }
  fighter.gravity();
}


function keyPressed() {

  if (keyCode === 32) {
    attackkk = true;
    //state = 'attack';
  }
  // else {
  //   state = 'notAttack';
  //}
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
