let desli;
let boton;
let val;
let control=0;

function setup(){
  createCanvas(400, 400);
  desli = createSlider(50, 200, 70);
  desli.position(10,20);
    
  boton = createButton("Botón");
  boton.position(10, 60);
  boton.mousePressed(presionado);
}

function draw(){
  val = desli.value();
  background(val,50,50);
  if(control % 2 == 1){
    circle(width/2, 150, 180);
  }
}

function presionado(){
  control++;
}
