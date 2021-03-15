var intro;

function setup() {
  createCanvas(800,400);
  
  intro = new Intro()
  rect(480,500,790,390)
}

function draw() {
  background("white");  
  
  //if(mousePressed(rect)){
   // clear();
  
  intro.display()
  drawSprites();
}

