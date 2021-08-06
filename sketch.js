var snow,snowImg;
var bg,bgImg;

function preload(){
bgImg = loadImage("snow3.jpg");
snowImg = loadImage("snow5.webp")
}

function setup() {
  createCanvas(1536,753);
}

function draw() {
  background(bgImg); 
  textSize(40);
  fill("red");
  text("**MERRY CHRISTMAS AND HAPPY NEW YEAR ** ",590 ,730,); 
  text("**MERRY CHRISTMAS AND HAPPY NEW YEAR ** ",22 ,50,); 

  var select_snow = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_snow == 1) {
      snow1();
    
    }
  }  

  
  drawSprites();
}

function snow1() {
  var snow = createSprite(Math.round(random(100, 1000)),0, 10, 10);
  snow.addImage(snowImg);
  snow.velocityY = 20;
  
  snow.lifetime = 150;
  snow.scale = 0.3;
  
  


  
}