var moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);

  moving = createSprite(200, 200, 20, 20);
}

function draw() {
  background("red");

  if(moving.x - fixed.x < moving.width/2 + fixed.width/2
    && fixed.x - moving.x < moving.width/2 + fixed.width/2) {
    moving.shapeColor = "blue";
  }
  
  if(moving.y - fixed.y < moving.height/2 + fixed.height/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2) {
    moving.shapeColor = "green";
  }

  moving.x = mouseX;
  moving.y = mouseY; 

  drawSprites();
}