function setup() {
  createCanvas(400, 400);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(220);
  textSize(40);
  text(key,200,100);
  if(keyIsPressed){
    circle(200,300,50);
  }
}
