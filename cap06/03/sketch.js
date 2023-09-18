function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let y=0; y<height; y+=height/40){
    for(let x=0; x<width; x+=width/40){
      noStroke();
      fill(random(255));
      rect(x,y,10,10);
    }
  }  
  noLoop();
}