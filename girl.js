class Girl{
    constructor(x,y) {
        var options={
            isStatic: true,
            restitution: 0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("sprites/boy.png");
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