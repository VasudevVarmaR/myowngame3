var captain,captainImg;
var bladeImg,bulletImg;
var bladeGroup,bulletGroup;
var sheildImage,sheildGroup;
var thanos,thanosImg;
var ground;
var distance = 0;
var ability = 0;
var ThanosHP = 500;
var bg;

function preload()
{
  bg=loadImage("bg1.jpg");
  captainImg=loadImage("C1.png");
  spiderAnimation=loadAnimation("S2.png","S3.png","S4.png","S3.png","S5.png");
  bladeImg = loadImage("blade.png");
  bulletImg = loadImage("bullet.png");
  sheildImage = loadImage("sheild.png");
  thanosImg = loadImage("thanos.png");
}

function setup() 
{
  createCanvas(1100,500);

  captain = createSprite(50,450,20,100);
  captain.addImage(captainImg)

  thanos = createSprite(captain.x+500,captain.y,20,50);
  thanos.addImage(thanosImg);

  bladeGroup = new Group();
  bulletGroup = new Group();
  sheildGroup = new Group();

}

function draw() 
{
  background(bg);
  
  camera.position.x=captain.x;
  camera.position.y=captain.y;

  captain.velocityX=0;
  captain.velocityY=0;

 if(keyDown(UP_ARROW))
 {
  captain.velocityY=-3;
 }

 if(keyDown(DOWN_ARROW))
 {
  captain.velocityY=3;
 }

 if(keyDown(RIGHT_ARROW))
 {
  captain.velocityX=3;
  distance++;
 }

 if(keyDown(LEFT_ARROW))
 {
  captain.velocityX=-3;
 }

  spawnBlades();
  spawnBullets();

  if(bulletGroup.isTouching(thanos))
  {
    ThanosHP=ThanosHP-50;
    bulletGroup.destroyEach();
  }
 
  
  drawSprites();


  textSize(20);
  fill("white");
  text("ThanosHP : "+ ThanosHP,captain.x+400,captain.y-200);
}


function spawnBlades()
{
  if(frameCount % 70 === 0)
  {
    var blade = createSprite(thanos.x,random(thanos.y+20,thanos.y-20),30,30);
    blade.addImage(bladeImg);
    blade.scale=0.3;
    blade.velocityX=-7;
    blade.lifetime=200;
    bladeGroup.add(blade);
  }
}

function spawnBullets()
{
  if(frameCount % 100 === 0)
  {
    var bullet = createSprite(captain.x,captain.y,10,30);
    bullet.addImage(bulletImg);
    bullet.scale=0.3;
    bullet.velocityX=7;
    bullet.lifetime=200;
    bulletGroup.add(bullet);  
  }
}

