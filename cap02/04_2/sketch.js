let cancion;

function preload(){
  cancion=loadSound("audio.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function mousePressed(){
  if(cancion.isPlaying()){  
    cancion.pause();
  }else{
    cancion.setVolume(0.1);
    cancion.play();
  }
}
