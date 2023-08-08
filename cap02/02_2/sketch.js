let img;

function preload(){
    img=loadImage('archivo.png');
}

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(100);
    scale(0.5);
    image(img,0,0);
    filter(INVERT); //THRESHOLD, GRAY, OPAQUE
}
