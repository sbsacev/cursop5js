let y;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  y=height/2;
}

function draw() {
  background(220);
  fill(255);
  rect(width/2,height/2,40,300);
  fill(0,50,155);
  rect(width/2,y,40,20);
}

function mouseWheel(evento){
  y+=evento.delta/10;
  y=constrain(y,50,350);
  return false;
}