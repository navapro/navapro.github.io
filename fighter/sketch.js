// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let runArray = [];
let attackArray = [];
let run1,run2,run3,run4,run5,run6,run7,run8,run9,run10;
let attack0,attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8,attack9;
let fighter,fighterAttack;
let img
let state = 'notAttack';
let heroX,heroY;
let attackCounter = 0;

function preload() {
  loadRun();
  loadAttack();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  runArray = [run1,run2,run3,run4,run5,run6,run7,run8,run9,run10];
  attackArray =[attack0,attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8,attack9];
  
  fighter = new Run(runArray,windowWidth / 4, windowHeight/2,.6); // new run neede or let run
  fighterAttack = new Attack(attackArray,heroX,heroY,.1);
}

function draw() {

  background(img);

 if (state === 'notAttack'){
  fighter.show();
  
  if (keyIsPressed === true) {
  
    if (keyCode === 39) { 
      fighter.moveForward();
    }
    
  if (keyCode === 37) {
    fighter.moveBackward();
  }
  if (keyCode === 38) {
    fighter.jump();
  }
}
}
if (state === 'attack'){ 
  fighterAttack.hit();
  attackCounter += .1;
}
if (attackCounter > 10){
  state = 'notAttack';
  attackCounter = 0;
}
fighter.gravity();
fighterAttack.gravity();
}

 function keyPressed() {

 if (keyCode === 32) {
state = 'attack';
}
else{
  state = 'notAttack';
}
 }