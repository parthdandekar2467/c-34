class Box{
    constructor(x, y)
    {
        var options = {
            friction:1.0,
            density:0.04,
            restitution:1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill("Cyan");
        rect(0, 0, this.width, this.height);
        pop()

    }
};
