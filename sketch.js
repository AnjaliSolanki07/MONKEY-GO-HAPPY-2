var PLAY=1;
var END=0;
var gameState = "serve";
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score, ground
var survivalTime
var score
var invisibleBanana

function preload(){
  
  
monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstaclesGroup= new Group()
}

function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0   
  
  ground=createSprite(0,400,1500,10)
  
  monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1

}

function draw() {
  background("orange")  
  
if(keyDown("space")&&monkey.y >= 350){
  monkey.velocityY=-10
}
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  ground.velocityX = -7 
if(ground.x<0) {
  ground.x=ground.width/2;
}
  console.log(ground.x)

    
if(World.frameCount%200===0){
    fruits()
 } 
if(World.frameCount%300===0){
   stones()
 }
 
  if(monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach()
  score=score+1  
}
  
  if (score===1){
   background("lightblue")
  }
  
  if (score===2){
   background("lightgreen")
  }
  
  
  if (score===3){
   background("pink")
  }
  
  if (score===4){
   background("yellow")
  }
  
  if(score===5){
  background("skyblue");
  }
  
  if(score===6){
  background("purple");
  }
  
  if(score===7){
  background("brown");
  }
  
  if(score===8){
  background("gray");
  }
  
  if(score===9){
  background("lightyellow");
  }
  
  if(score===10){
  background("navy");
  }
  
if(gameState===END){
  ground.velocityX = 0;
  monkey.velocityY= 0;
  monkey.velocityX = 0;
  banana.velocityX=0;
  obstacle.velocityX=0;
  
  }
  
if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX = 0;
  monkey.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
  gameState =END;
  background("black");
  textSize(40)
  stroke("red")
  fill("white")
  text("GAME OVER",200,200); 
}
 
  drawSprites()
  
  textSize(20)
  stroke("black")
  fill("black")
  if (gameState === "serve")
  text("Press space to start GAME",230,200);
  
  //serve the game when space is pressed
  if (keyDown("space") && gameState === "serve") {
  gameState =  "play";  
  }
  
  textSize(20)
  fill("blue") 
  text("Score: "+ score, 500,50);
  
  fill("red")
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,300,50)
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.lifetime = 300;
  monkey.depth = banana.depth + 1;
  banana.velocityX=-3
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,380,10,10);
  obstacle.addImage(obstaceImage)
  obstacle.lifetime = 300;
  obstacle.velocityX=-4
  obstacle.scale=0.15
  obstaclesGroup.add(obstacle)

}






