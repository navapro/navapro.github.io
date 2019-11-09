
let rectX = 0;
let rectY = 0;
let box;

function setup() {
  createCanvas(windowWidth,windowHeight);
  box = new Run(rectX,rectY); 

}

function draw() {
  background(0,0,0,20)
  box.show();
  box.gravity();
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
    if (this.y < windowHeight / 1.2) {
        this.y += 4;
    }
}
}