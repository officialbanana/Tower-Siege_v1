class Poolygon {
  
    constructor(x, y,width,height) {
      this.gap = [30,660];
      var options = {
          restitution:1,
          isStatic:false,
          friction:0.5,
          density:2
      }
      this.x = x;
      this.y = y;
      this.width=width;
      this.height=height;
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world, this.body);
      
     
      this.image = loadImage("polygon.png")
    }

    display(){
      var pos = this.body.position;
      this.gap[0] = pos.x;
      this.gap[1] = pos.y;
     
      imageMode(CENTER);
      image(this.image,this.gap[0],this.gap[1],this.width,this.height)
      
      
      }
      
  };
  