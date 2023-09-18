let entrada;
let texto;

function setup(){
  createCanvas(400, 400);
  entrada = createInput('','number');
  entrada.position(20,20);
  entrada.size(100,40);
    
  texto = createInput('','text');
  texto.position(100,120);
  texto.size(200);
}

function draw(){
  background(237,205,116);
  let a = entrada.value();
  textSize(16);
  text("El doble del número ingresado es "+2*a,20,85);
  text("Has escrito "+texto.value(),100,160);
}
