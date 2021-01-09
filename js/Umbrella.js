class Umbrella {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            friction: 0.1
        }
        this.body = Bodies.rectangle(200, 500, width, height, options);
        this.width = 400;
        this.height = 400;
        this.image = loadImage("Walking Frame/walking_1.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, x, y, this.width, this.height);
        pop();
    }
}