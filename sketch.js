var bullet,wall,speed,weight,damage,thickness;

function setup() {

  createCanvas(1600,400);

  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200, 200, thickness, height/2);

  speed=random(223,321);
  wall.shapeColor=color(80,80,80);
  weight=random(30,52);

  bullet.velocityX=speed;
  bullet.shapeColor=("white");
  
 }

function draw() {
  background("black");  

  if(wall.x-bullet.x < (bullet.width + wall.width)/2){

  bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>180){
  bullet.shapeColor=color(255,0,0);
  
  }

  if(damage>10){
  bullet.shapeColor=("red");
  }

  if(damage<10){
  bullet.shapeColor=("green");
  }

  }

  drawSprites();
}