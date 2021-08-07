class SlingShot {
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            lenght:10,
        }
        this.sling = Matter.Constraint.create(options)
        //this.polygon = loadImage("polygon.png")
        this.pointB = pointB
        World.add(world,this.sling)
    }
  
    fly(){
        this.sling.bodyA = null;
    }
  
   display(){
       if(this.sling.bodyA){
       strokeWeight(3)
       stroke("black")
       line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
       
       
    }
   }
  
  }