var x = 200;
var y = 300;

function setup(){
    createCanvas(600,400);
    background(150);
}

function draw(){
   flower(100,300);
   flower(200,300);
   flower(300,300);
   flower(400,300);
   flower(500,300);
   
   if(mouseIsPressed){
       flower(mouseX,mouseY);
   }
}

function flower(x,y){
      //WLA
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    
    //Happy
    smooth();
   var x = 200;
var y = 300;

function setup(){
    createCanvas(600,400);
    background(50);
}

function draw(){
   rose(100,300);
   rose(200,300);
   rose(300,300);
   rose(400,300);
   rose(500,300);
   
   if(mouseIsPressed){
       flower(mouseX,mouseY);
   }
}

function flower(x,y){
      //stem
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    
    //shankar
    noSmooth()
    ellipse(30, 48, 36, 36);
    ellipse(70, 48, 36, 36);
    
     //barbis
    fill(255,200,0);
    ellipse(x,y,25,25);
}
     //keys
    fill(255,200,0);
    ellipse(x,y,25,25);
}