class Paper {
constructor(x,y,r)
{
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:5.5
}
this.x=x;
this.y=y
this.r=r;

this.body=Bodies.circle(this.x,this.y,this.r/2,options)
this.image =loadImage("sprites/paper.png");
World.add(world,this.body);

}
display()
{
var paperpos=this.body.position;

  push()
translate(paperpos.x,paperpos.y)
//imageMode(CENTER) 
//this.image(this.image,0,0,this.width,this.height);
rectMode(CENTER)
strokeWeight(3);
fill(255,0,255)
ellipse(0,0,this.r,this.r);
pop()


}

}