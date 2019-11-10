
let rectX = 0;
let rectY = 0;
let box;
let prevX,prevY;

function setup() {
  createCanvas(windowWidth,windowHeight);
  box = new Run(rectX,rectY); 

}

function draw() {
  background(0,0,0,20)
  box.show();
  box.gravity();
}
function keyPressed() {
 box.jump();

 
}


class Run { 
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  show(){
    let fillColor = [ '#FF0000','#FFC000','#FFFC00','#FF0000','#00FFFF','#FF0000'];
    fill(fillColor[0]);
    noStroke();
    rect(floor(this.x),floor(this.y),100,100);
  }
  gravity() {
    if (this.y < windowHeight / 1.19) {
        this.y += 9.8;
    }
  }
  jump() {
     this.x = prevX;
    this.y = prevY;
    if (this.y > windowHeight/5) {
      this.y -= 20;
  }
}
}