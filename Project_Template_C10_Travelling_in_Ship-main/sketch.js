
var sea, ship;
var seaImage, shipImage1;

function preload(){
  seaImage = loadImage("sea.png");
shipImage1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
background("blue");

  //Creating sea
sea=createSprite(300,100,400,10);
sea.addImage("endlessea",seaImage);
sea.velocityX=-5;
sea.scale=0.3;



  ship=createSprite(50,140,20,20);
  ship.addAnimation("movingShip",shipImage1);
ship.scale=0.1;



}

function draw() {
  background("white");

  //Making sea infinite
if (sea.x<0) {
sea.x=sea.width/8;
}



 drawSprites();
}