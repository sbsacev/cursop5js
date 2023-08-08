function setup(){
  createCanvas(400,400);
}

function draw(){
  background(200,50,0);
  rect(100,40,50,20);
  
  push();
  translate(width/2,height/2);
  rotate(PI/4);
  rect(100,40,50,20);
  pop(); 
}
