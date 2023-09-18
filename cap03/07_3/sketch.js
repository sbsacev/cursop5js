let x=0;
let y=0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  menu=createSelect();
  menu.option("Opción 1","100");
  menu.option("Opción 2","200");
  menu.option("Opción 3","300");
  menu.selected("200");
  menu.position(20,20);
  
  radio=createRadio();
  radio.option("100", "Opción A");
  radio.option("200", "Opción B");
  radio.option("300", "Opción C");
  radio.selected("200");
  radio.position(20,100);

  check=createCheckbox("Cambio de color",false);
  check.position(20,60);
}

function draw() {
  background(200);
  x=radio.value();
  y=menu.value();
  
  if(check.checked()){
    fill(255,0,0);
  }else{
    fill(0,0,255);
  }
  circle(x,y,60);
}