class Run {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    
    fill('#FF0000');
    noStroke();
    //rect(this.x, this.y, 50, 50);
    //image(charecter, 0,0,0,0);
    // floor or notfloor(

     
      

      cx = this.x;
      cy = this.y;
      playerY = floor(cy/ cellHeight);
      playerX = floor(cx/ cellWidth);


  }
  gravity() {
    if (this.y < windowHeight / gravityC) {
      this.y += 20;
    }
  }
  jump() {
    this.y -= 40;
  }

  forward(){
      this.x += 20;
  }
  backward(){
      this.x -= 20;
  }
  down() {
    this.y += 20;
  }
}
