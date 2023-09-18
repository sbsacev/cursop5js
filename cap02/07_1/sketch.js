function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20,230,0);
  for(let i=0; i<4; i++){
    circle(i*80+50,200,40);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(i+1,i*80+50,200);
  }
}
