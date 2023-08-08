function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  stroke(0);
  line(0,0,300,300);
  fill(255,0,0);
  circle(50,200,40);
  fill(255,255,0,50);
  ellipse(300,100,200,50);
  rect(300,200,50,80);
  noFill();
  arc(300,300,100,100,0,90);
  strokeWeight(4);
  stroke(0,0,255,50);
  triangle(30,350,30,300,100,350);
  noFill();
  bezier(150,200,180,230,180,150,200,300);
}
