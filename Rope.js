class Rope {

constructor(bodyA, pointB){

var options = {bodyA : bodyA, pointB : pointB , stiffness : 1.2 , length : 250}
this.rope = Constraint.create(options);
this.pointB = pointB;
World.add(world , this.rope);

}


display(){

if (this.rope.bodyA){
push ();
stroke ("green");
strokeWeight (3);
line(this.rope.bodyA.position.x , this.rope.bodyA.position.y , this.pointB.x , this.pointB.y);
pop();



}



}

}