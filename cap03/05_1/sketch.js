let cancion;
let boton;
let fft;

function preload(){
  cancion=loadSound("audio.mp3");  
}

function setup() {
  createCanvas(512, 512);
  boton = createButton('play/pause');
  boton.mousePressed(toggle);
  fft = new p5.FFT(0.9,512);
  colorMode(HSB);
}

function draw() {
  background(0);
  let espectro = fft.analyze();
  for(let i = 0; i < espectro.length; i++){
  strokeWeight(4);
  stroke(map(espectro[i],0,300,0,255),100,100);
  point(i,map(espectro[i],0,300,height,0));
  }
}

function toggle(){
  if(cancion.isPlaying()){
     cancion.pause();
     }else{
    cancion.play();
  } 
}
