class Pelota{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx=random(4,8);
    this.vy=random(-6,6)
  }
  
  mostrar(){
    circle(this.x,this.y,20);
  }
  
  mover(){
    if(this.x>width || this.x<0){
       this.vx*=-1;
       }
    if(this.y>height || this.y<0){
       this.vy*=-1;
       }
    this.x+=this.vx;
    this.y+=this.vy;
  }
}
