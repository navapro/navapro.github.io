 class zombieRun {
    constructor(animation, x, y, speed) {
        this.animation = animation;
        this.speed = speed;
        this.counter = 0;
        this.len = this.animation.length;
        this.x = x;
        this.y = y;
        this.resetX = x;
        this.resetY = y;
    }

    show() {
        push()// do i need semicolen
        let runSpeed = floor(this.counter) % this.len;
        image(this.animation[runSpeed], this.x, this.y, 250, 250);
        pop();
        zombieX = this.x;
        zombieY = this.y;
    }
    moveForward() {
        this.counter += this.speed;
        if (this.x > 0) {// this is fine/1.2
            this.x += this.speed * -50;
        }
    }
    reset(){
        this.x = this.resetX;
        this.y = this.resetY;
    }

}
class zombieDead {
    constructor(animation, x, y, speed) {
        this.animation = animation;
        this.counter = 0;
        this.len = this.animation.length;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    dead() {
        this.counter += this.speed;
        let runSpeed = floor(this.counter) % this.len
        image(this.animation[runSpeed], zombieX, zombieY,  225, 225);// whyt thuis .x doesnt work//x and y cpitl or not
    }

}