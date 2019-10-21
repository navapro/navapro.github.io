
class Run { // camel case capital n??
    constructor(animation, x, y, speed) {
        this.animation = animation;
        this.speed = speed;
        this.counter = 0;
        this.len = this.animation.length;
        this.x = x;
        this.y = y;
        
    }

    show() {
        let runSpeed = floor(this.counter) % this.len
        //imageMode(CENTER);
        push();
        translate(this.x, this.y);
        scale(heroFacing, 1);
        image(this.animation[runSpeed], 0, 0, 300, 300);
        heroX = this.x;
        heroY = this.y;
        pop();
    }
    moveForward() {
        this.counter += this.speed;
        if (this.x < windowWidth / 2) {// this is fine/1.2
            this.x += this.speed * 15;
        }
        heroFacing = 1;
    }
    moveBackward() {
        this.counter += this.speed;
        if (this.x > 0) {
            this.x += this.speed * -10;
        }
        heroFacing = -1;
    }
    jump() {
        if (this.y > windowHeight / 10) {
            if (this.y - 20 > windowHeight / 10){ //this deosnt work
            this.y -= 20;
            }
        }


    }

    gravity() {
        if (this.y < windowHeight / 2) {
            this.y += 4;
        }
    }
    


}


class Attack {
    constructor(animation, x, y, speed) {
        this.animation = animation;
        this.counter = 0;
        this.len = this.animation.length;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    hit() {
        push();
        translate(heroX, heroY);
        scale(heroFacing, 1);
        this.counter += this.speed;
        let runSpeed = floor(this.counter) % this.len
        image(this.animation[runSpeed], 0, 0, 350, 308);// whyt thuis .x doesnt work
        pop();
    }

    gravity() {
        if (heroY < windowHeight / 2) {
            heroY += 4;
        }
    }
}
