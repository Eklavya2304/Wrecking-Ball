class Ball {

    constructor(x,y,width,height){
    
    var options = {
        
        frictionAir:0.005,
        density:1

    }
    
    this.body = Bodies.circle (x,y,width,options);
    this.width = width;
    this.height = height;
    World.add (world,this.body);
    
    
    }
    
    display(){
    
    push();
    translate(this.body.position.x , this.body.position.y);
    rotate(this.body.angle);    
    ellipseMode(RADIUS)
    fill("yellow");
    
    ellipse(0,0, this.width, this.height)
    pop();
    
    
    
    }
    
    }