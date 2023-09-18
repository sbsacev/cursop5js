let numeros=[];

function setup(){
   createCanvas(400, 400);
   background(200);
   for(let i=0; i<100; i++){
      numeros[i]=floor(random(500));
   }
}
