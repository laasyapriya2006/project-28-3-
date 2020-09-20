class Tree{
    constructor(x,y){
        var options = {
            'isStatic': true,
        };
        this.body = Bodies.rectangle(890,390,400,570,options);
        this.x = 890;
        this.y = 390;
        this.width = 400;
        this.height = 570;
        this.image = loadImage("tree.png");

        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}

