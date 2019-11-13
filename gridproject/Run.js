// create a class and assign variables.
class Run {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // set the fillcolor, players x and y.
  show() {

    fill('#FF0000');
    noStroke();
    cx = this.x;
    cy = this.y;

    // find which row and column the player is in.
    playerY = floor(cy / cellHeight);
    playerX = floor(cx / cellWidth);


  }
  
  // add 20 to y position to simulate gravity.
  gravity() {
    if (this.y < windowHeight / 1.358) {
      this.y += 20;
    }
  }

  // subtract 40 to simulate jumping
  jump() {
    this.y -= 40;
  }

// add x to move forward
  forward() {
    this.x += 20;
  }
// subtract x to move backward
  backward() {
    this.x -= 20;
  }
  
}
