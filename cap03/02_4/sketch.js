let img;

function preload(){
    img = loadImage('foto360.png');
}

function setup(){
    createCanvas(512,512,WEBGL);
}

function draw(){
    background(0);
    noStroke();
    let b=map(mouseX,0,width,2*PI,0);
    let c=map(mouseY,0,height, -PI/2, PI/2);
    rotateX(c);
    rotateY(b);
    texture(img);
    scale(3);
    sphere(200);
}