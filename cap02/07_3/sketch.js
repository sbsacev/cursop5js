function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let y=0; y<height; y+=20){
    for(let x=0; x<width; x+=20){
      circle(x+10,y+10,10);
    }
  }
}