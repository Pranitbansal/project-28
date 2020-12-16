class Stone{
    constructor(x,y) {
        var options={
            isStaic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body=Bodies.circle(x,y,20,20,options);
        this.image=loadImage("sprites/stone.png");
        World.add(world,this.body);
    }

    display() {
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}