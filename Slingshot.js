class Slingshot{

    constructor(bodyA, pointB){
      var slingshot_options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            
      }  
      this.Kundana=Constraint.create(slingshot_options);
      World.add(world,this.Kundana)
    }
    fly(){
      this.Kundana.bodyA = null;
  }

    display(){
     strokeWeight(10);
     stroke("blue")
     if (this.sling.bodyA) {
          var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);   
    }
    
    }
}