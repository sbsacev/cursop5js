let img;

function preload(){
    img=loadImage('archivo.png');
}

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(0);
    image(img,0,0);
}
