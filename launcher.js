class launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.004,
            length: 1
        }
        this.b = bodyB;
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }

    attach(body){
		this.Launcher.bodyA=body;
	}
    
    fly(){
        this.Launcher.bodyA = null;
    }

    display(){
        if(this.Launcher.bodyA != null){
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.b;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}