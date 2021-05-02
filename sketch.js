var fixedrect
var movingrect
var bouncingrect1
var bouncingrect2
var bouncingrect3
var bouncingrect4
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 100);
  movingrect = createSprite(300,200,100,50);
  bouncingrect1 = createSprite(100,300,50,100);
  bouncingrect2 = createSprite(700,300,100,50);
  bouncingrect3 = createSprite(50,100,10,10);
  bouncingrect4 = createSprite(50,500,10,10)
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
  bouncingrect1.shapeColor = "blue"
  bouncingrect2.shapeColor = "yellow"
  bouncingrect3.shapeColor = "orange"
  bouncingrect4.shapeColor = "purple"
  movingrect.debug = true
  fixedrect.debug = true
  bouncingrect1.velocityX=2
  bouncingrect2.velocityX=-2 
  bouncingrect3.velocityY=2
  bouncingrect4.velocityY=-2
}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"
  }  
else{
movingrect.shapeColor = "green"
fixedrect.shapeColor = "green"
}
// Algorithm for bounceOff
if(bouncingrect1.x-bouncingrect2.x<=bouncingrect1.width/2+bouncingrect2.width/2 &&
  bouncingrect2.x-bouncingrect1.x<=bouncingrect1.width/2+bouncingrect2.width/2){
    bouncingrect1.velocityX=bouncingrect1.velocityX*(-1)
    bouncingrect2.velocityX=bouncingrect2.velocityX*(-1)
  }
if(bouncingrect3.y-bouncingrect4.y<=bouncingrect4.height/2+bouncingrect3.height/2 &&
   bouncingrect4.y-bouncingrect3.y<=bouncingrect4.height/2+bouncingrect3.height/2){
     bouncingrect3.velocityY=bouncingrect3.velocityY*(-1)
     bouncingrect4.velocityY=bouncingrect4.velocityY*(-1)
   }
  drawSprites();
}