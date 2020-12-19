var fRect
var mRect

function setup() {

  createCanvas(1200, 800);
  fRect = createSprite(600, 400, 50, 80);
 mRect = createSprite(400, 200, 80, 30);
}

function draw() {
  background(0, 0, 0);  
 
  mRect.x = World.mouseX;
  mRect.y = World.mouseY;

if(mRect.x - fRect.x < mRect.width/2 + fRect.width/2 && fRect.x - mRect.x < mRect.width/2 + fRect.width/2 && mRect.y - fRect.y < mRect.height/2 + fRect.height/2 && fRect.y - mRect.y < mRect.height/2 + fRect.height/2   ) {
mRect.shapeColor= "red"
fRect.shapeColor= "red"
}
else{

mRect.shapeColor= "green" 
fRect.shapeColor= "green"

}

  drawSprites();
}