class Boat {
    constructor(x, y, width, heigth, boatPos){
        var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        };
        this.width = width;
        this.heigth = heigth;
        this.body = Bodies.rectangle(x, y, this.width, this.heigth, options);
        this.boatPosition = boatPos;
        this.image = loadImage("assets/boat.png");
        World.add(world, this.body);
        
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.width, this.heigth);
        noTint();
        pop();
    }
}