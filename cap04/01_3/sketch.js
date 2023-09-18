let pelotas=[];

function setup() {
  createCanvas(400, 400);
  for(let i=0; i<10; i++){
    pelotas[i]= new Pelota(random(100,200),random(100,200));
  }
}

function draw() {
  background(220,100,60,80);
  for(let i=0; i<pelotas.length; i++){
    pelotas[i].mostrar();
    pelotas[i].mover();
  }
}

function mousePressed(){
  pelotas.push(new Pelota(mouseX,mouseY));
}


/* // las líneas 12, 13, 14 y 15 puede reemplazarlas por:
for(let pelotitas of pelotas){
    pelotitas.mostrar();
    pelotitas.mover();
  }
*/
