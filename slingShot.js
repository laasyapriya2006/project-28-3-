class SlingShot{
    constructor(bodyAobj, pointBobj){
        var options = {
            bodyA: bodyAobj,
            pointB: pointBobj,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointBobj;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    Fly(){
        this.chain.bodyA = null;
    }

    display(){
       if(this.chain.bodyA != null){
        var pointA = this.chain.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

    attach(body){
        this.chain.bodyA = body;

    }
    
}

