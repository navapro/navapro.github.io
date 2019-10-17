class zombieRun {
    constructor(animation, x, y, speed) {
        this.animation = animation;
        this.speed = speed;
        this.counter = 0;
        this.len = this.animation.length;
        this.x = x;
        this.y = y;
    }

    show() {
        push()
        let runSpeed = floor(this.counter) % this.len
        imageMode(CENTER);
        image(this.animation[runSpeed], this.x, this.y, 250, 250);
        pop()
    }
    moveForward() {
        this.counter += this.speed;
        if (this.x > 0) {// this is fine/1.2
            this.x += this.speed * -10;
        }
    }
}