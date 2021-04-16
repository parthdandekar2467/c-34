class Ball{
    constructor(x, y,angle)
    {
        var options = {
            frictionAir:0.005,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;

        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop()

    }
};
