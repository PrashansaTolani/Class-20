var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(1100,400,80,30);
  movingRect.shapeColor = "green";

  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
}

function draw() {
  background(0); 
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY; 

//   if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
//      fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
//      fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
//      movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
//      fixedRect.shapeColor ="red";
//      movingRect.shapeColor = "red";
//   }
//   else{
//     fixedRect.shapeColor ="green";
//     movingRect.shapeColor = "green";
// }

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 ){
    fixedRect.velocityX = fixedRect.velocityX*(-1)
    movingRect.velocityX = movingRect.velocityX*(-1)
  }


  drawSprites();
}