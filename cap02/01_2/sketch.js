let numeros=[];

function setup(){
   createCanvas(400, 400);
   background(200);
   for(let i=0; i<100; i++){
      numeros[i]=floor(random(500));
   }
}

function draw() {
  background(220,250,0);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  textSize(10);
  text("añade un elemento al final",20,20);
  text("borra el último elemento",220,20);
  text("borro el primer elemento",20,220);
  text("borro varios elementos",220,220);
}

function mousePressed(){
  if(mouseX<width/2 && mouseY<height/2){
    numeros.push(floor(random(200)));
}
  if(mouseX>width/2 && mouseY<height/2){
    numeros.pop();
  }
  
  if(mouseX<width/2 && mouseY>height/2){
    numeros.splice(0,1);
  }
  
  if(mouseX>width/2 && mouseY>height/2){
    numeros.splice(1,5);
  }
}
