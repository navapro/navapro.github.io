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
let attackState = 'notAttack';
let heroX, heroY;
let zombieX,zombieY;
let attackCounter = 0;
let movingForward = false;
let movingBackwards = false;
let jumping = false;
let attackkk = true;
let collide = false;
let zombieSpeed;
let zombieDeathCounter = 0;
let heroFacing = 1;
let collideVariable;
let state = "menu";
let click;
let play;

function preload() {
  loadRun();
  loadAttack();
  loadZombie1();
  loadZombie1Dead();
  play = loadImage("assets/play.png");
}


function setup() {
  let cnv = createCanvas(windowWidth,windowHeight);
  zombieSpeed = 0.05;

  runArray = [run1, run2, run3, run4, run5, run6, run7, run8, run9, run10];
  attackArray = [attack0, attack1, attack2, attack3, attack4, attack5, attack6, attack7, attack8, attack9];
  zombieWalkArray = [zombie0,zombie1,zombie2,zombie3,zombie4,zombie5];
  zombieDeadArray = [zombieDead0,zombieDead1,zombieDead2,zombieDead3,zombieDead4,zombieDead5,zombieDead6,zombieDead7];

  fighter = new Run(runArray, windowWidth / 4, windowHeight / 2, .4); // new run neede or let run
  fighterAttack = new Attack(attackArray, heroX, heroY, .2);
  zombie = new zombieRun(zombieWalkArray, windowWidth , windowHeight / 2, zombieSpeed);
  deadZombie = new zombieDead (zombieDeadArray, windowWidth , windowHeight / 1.5,0.15);
}

function draw() {

  if (state === "menu") {
    showMenu();
    checkIfButtonClicked();
  }
else if (state === "game"){
  background(img);
  if (zombieX <0){
    zombie.reset();
  }
  if (collide === true){
    if (zombieDeathCounter > 200) {
      zombie.reset();
    }
    deadZombie.dead();
    zombieDeathCounter += 1
    
    zombieSpeed += .0002;
    zombie = new zombieRun(zombieWalkArray, windowWidth , windowHeight / 2, zombieSpeed);
  }
  else {
    zombie.show();
    zombie.moveForward();}
  
  if (attackState === 'notAttack') {
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
  if ( attackState === 'attack') {
    push();
    fighterAttack.hit();
    attackCounter += .1;
    fighterAttack.gravity();
    scale(heroFacing, 1);
    collide = collideRectRect(heroX - collideVariable ,heroY,250,300,zombieX,zombieY,200,300);
    pop();
  }
  if (attackCounter > 5) {
    attackState = 'notAttack';
    attackCounter = 0;
  }
  fighter.gravity();
  noFill();
  stroke('red');

}
}


function keyPressed() {

  if (keyCode === 32) {
    //atackkk = trute;
    attackState = 'attack';
  }
  else {
   attackState = 'notAttack';
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

}
function showMenu() {
  fill(255, 0, 0, 125);
  image(play, width / 2.7, height / 2, 400,200);
}
function checkIfButtonClicked() {
  if (mouseIsPressed) {
  
  click = collidePointRect(mouseX,mouseY,width/2.7, height/2, 400,200);
  if(click === true){
    state = "game";
  }
}
}