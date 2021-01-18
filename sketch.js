var fixedRect, movingRect, box;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 2;
  fixedRect.velocityY = 2;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -4;
  movingRect.velocityY = -2;
  
  box = createSprite(300,100,50,50);
  box.velocityX = 3;
  box.velocityY = 3;
  box.debug = true;

  edges = createEdgeSprites();
}

function draw() {
  background(0,0,0);  

  if (isTouching(movingRect, box)) {
    movingRect.shapeColor = "red";
    box.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    box.shapeColor = "blue";
  }
  if (bounceOff(movingRect, box)){
    movingRect.velocityX = -(movingRect.velocityX);
    box.velocityX = -(box.velocityX);
    movingRect.velocityY = -(movingRect.velocityY);
    box.velocityY = -(box.velocityY);
  }
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);
  box.bounceOff(edges);
  drawSprites();
}

