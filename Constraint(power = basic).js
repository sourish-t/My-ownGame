class CB{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = pointB
        this.CB = Constraint.create(options);
        World.add(world, this.CB);
    }
    attach(body){
        this.CB.bodyA = body;
    }
    
    fly(){
        this.CB.bodyA = null;
    }

    display(){
      
        if(this.CB.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            pop();
        }
    }
    
}