let x=200;
let y=200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(keyIsDown(65)){
    fill(255,0,0);
  }else{
    fill(0);
  }
  circle(x,y,40);
  if(keyIsDown(LEFT_ARROW)){
    x-=5;
  }
}
