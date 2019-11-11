class Run {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    let fillColor = ['#FF0000', '#FFC000', '#FFFC00', '#FF0000', '#00FFFF', '#FF0000'];
    fill(fillColor[0]);
    noStroke();
    //rect(this.x, this.y, 50, 50);
    //image(charecter, 0,0,0,0);
    // floor or notfloor(
      cx = this.x;
      cy = this.y;
  }
  gravity() {
    if (this.y < windowHeight / 1.19) {
      this.y += 9.8;
    }
  }
  jump() {
    this.y -= 20;
  }

  forward(){
      this.x += 20;
  }
  backward(){
      this.x -= 20;
  }
}
