class box {
    constructor(x, y, width, height,angle) {
        var options = {
            'restitution':0.3,
            'friction':1,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y,10 , 10, options);
        this.width = width;
        this.height = height;
        
       // Matter.Body.setStatic(this.body, false); 
      

      
        
        World.add(world, this.body);
       
  
    }
      display(){
      
        var angle = this.body.angle;
        var pos =this.body.position;
       
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255,0,0);
        image(this.image,0, 0, this.width, this.height);
        pop();
        
      }
    }
