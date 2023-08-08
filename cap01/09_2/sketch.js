function setup() {
  createCanvas(400, 400);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(220);
  textSize(40);
  text(keyCode,200,100);
  if(keyCode==66){
    circle(200,300,50);
  }
}
