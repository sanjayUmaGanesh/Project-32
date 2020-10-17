class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 10
                       }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
         }
    attach(body){
        this.sling.bodyA = body;
    }    

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        stroke(84,40,15);
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
