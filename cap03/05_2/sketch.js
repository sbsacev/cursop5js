let mic;
let fft;
let espectro;

function setup() {
  createCanvas(512, 512);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9,512);
  fft.setInput(mic);
}

function draw() {
  background(0);
  espectro = fft.analyze();
  noFill();
  stroke(255,0,0);
  strokeWeight(4);
  beginShape();
  for(let i = 0; i < espectro.length; i++){
    vertex(i,map(espectro[i],0,300,height,0));
  }
  endShape();
}
