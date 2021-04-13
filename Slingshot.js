class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
    }

    fly(){
        this.sling.bodyA = null;

    }
    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#450e00")
            if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x+10, pointB.y)
            line(pointA.x-20, pointA.y, pointB.x+50, pointB.y)
            image(this.image3, pointA.x-30,pointA.y-10,15,30)
            }
            else{
                strokeWeight(3);
            
            line(pointA.x+20, pointA.y, pointB.x+10, pointB.y)
            line(pointA.x+20, pointA.y, pointB.x+50, pointB.y)
            image(this.image3, pointA.x+25,pointA.y-10,15,30)
            }
        }

        image(this.image1,225,25)
        image(this.image2,200,25)


        
    }
    
}