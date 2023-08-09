let cancion;

function preload(){
  cancion=loadSound("audio.mp3");
}

function setup() {
  createCanvas(400, 400);
  cancion.play();
}

function draw() {
  background(220);
}
