function setup(){
    createCanvas(512,512,WEBGL);
}

function draw(){
    background(220,0,40);
    rotateY(map(mouseX,0,width,0,4*PI));
    rotateZ(map(mouseY,0,height,0,4*PI));
    directionalLight(250,250,250,-1,-1,-1);
    
    push();
    translate(-100,-300,-300);
    fill(0,0,300);
    box(40,60);
    pop();
    
    push();
    translate(100,-300,-300);
    fill(255,255,255,60);
    box(40,60);
    pop();
    
    push();
    translate(100,0,-300);
    sphere(40);
    pop();
    
    push();
    translate(-100,0,-300);
    fill(0,255,0);
    cylinder(20,50);
    pop();
    
    push();
    translate(0,-50,100);
    cone(40,50);
    pop();
}
