 class Run {
     constructor(animation,x,y, speed){
         this.animation = animation;
         this.speed = speed;
         this.counter = 0;
         this.len = this.animation.length;
         this.x = x;
         this.y = y;
     }

 show(){
     let runSpeed = floor(this.counter) % this.len
    image(this.animation[runSpeed], this.x,this.y, 300, 300);
 }
animate(){
    this.counter += this.speed;
    this.x += this.speed*5;
}
 }