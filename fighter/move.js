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
     //imageMode(CENTER);
    image(this.animation[runSpeed], this.x,this.y, 300, 300);
 }
moveForward(){
    this.counter += this.speed;
    if ( this.x < windowWidth/1.2 ){// this is fine/1.2
    this.x += this.speed*5;
    }
}
moveBackward(){
   this.counter += this.speed;
   if ( this.x > 0 ){
   this.x += this.speed*-5;
   }
}
// stop(){
//     if (this.x != windowWidth|| this.x != 0 ){
//     this.x = this.x;
//     }
// }
}

