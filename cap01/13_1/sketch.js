let h;
let m;
let s;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(220,255,50);
  h=hour();
  m=minute();
  s=second();
  textSize(60);
  text(nf(m,2)+":"+nf(m,2)+":"+nf(m,2), width/2,200);
  textSize(20);
  text(millis(),width/2,300);
}
