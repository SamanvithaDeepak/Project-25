class Paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.5
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        push()
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.r+20, this.r+20)
        pop()
    }

}