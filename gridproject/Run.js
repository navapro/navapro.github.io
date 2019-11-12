class Run {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {

    fill('#FF0000');
    noStroke();
    cx = this.x;
    cy = this.y;
    playerY = floor(cy / cellHeight);
    playerX = floor(cx / cellWidth);


  }
  gravity() {
    if (this.y < windowHeight / 1.358) {
      this.y += 20;
    }
  }
  jump() {
    this.y -= 40;
  }

  forward() {
    this.x += 20;
  }
  backward() {
    this.x -= 20;
  }
  down() {
    this.y += 20;
  }
}
