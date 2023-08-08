function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  line(0,0,300,300);
  circle(mouseX,mouseY,40);
  ellipse(300,100,200,50);
  rect(300,200,50,80);
  arc(300,300,100,100,0,90);
  triangle(30,350,30,300,100,350);
  bezier(150,200,180,230,180,150,200,300);
}
