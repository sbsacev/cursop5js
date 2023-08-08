let fuente;
let a=2;
let b=5;

function preload(){
    fuente = loadFont("times.ttf");
}

function setup(){
    createCanvas(512,512);
}

function draw(){
    background(0,150,250);
    textSize(20);
    text("Hola", width/2, 40);
    
    push();
    textFont(fuente);
    textSize(30);
    textAlign(CENTER);
    text("Hola, esto es p5.js", width/2, 80);
    pop();
    
    let suma=a+b;
    text("2 + 5 = "+suma, width/2, 120);
}
