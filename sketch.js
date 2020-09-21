var player,playerRightImg,playerLeftImg
var ground,ground1,ground2,ground3,groundImg
var monster,monster1,monster2,monsterRightImg,monsterLeftImg;
var groundGroup,bgImg;

function preload(){
  playerRightImg = loadAnimation("images/player1.png","images/player2.png","images/player3.png");
  playerLeftImg = loadAnimation("images/player4.png","images/player5.png","images/player6.png");
  groundImg = loadImage("images/ground.png");
  monsterLeftImg = loadAnimation("images/monster5.png","images/monster6.png","images/monster7.png","images/monster8.png")
  monsterRightImg = loadAnimation("images/monster1.png","images/monster2.png","images/monster3.png","images/monster4.png")
  bgImg = loadImage("images/bg.png");
}


function setup() {
  createCanvas(displayWidth-70,displayHeight-150);
  

  //creating player
  player = createSprite(50, 400, 50, 50);
  player.addAnimation("right",playerRightImg);
  player.addAnimation("left",playerLeftImg);
  player.scale = 0.8

  //creating ground
  ground = createSprite(displayWidth-340,displayHeight-400);
  ground.addImage("ground",groundImg);
  ground.scale =  1.1;

  ground1 = createSprite(displayWidth/2-30,displayHeight-550);
  ground1.addImage("ground1",groundImg);
  ground1.scale = 1.1;

  ground2 = createSprite(displayWidth/2-400,displayHeight-700);
  ground2.addImage("ground2",groundImg);
  ground2.scale = 1.1;

  ground3= createSprite(displayWidth/2,550);
  ground3.addImage("ground",groundImg);
  ground3.scale = 3.1

  

  monster = createSprite(displayWidth-430,displayHeight-450);
  monster.addAnimation("monster",monsterRightImg);
  monster.velocityX=2;
  monster.scale = 0.3

  monster1 = createSprite(displayWidth-800,displayHeight-600);
  monster1.addAnimation("monster",monsterRightImg);
  monster1.velocityX=2;
  monster1.scale = 0.3

  monster2 = createSprite(displayWidth-1250,displayHeight-750);
  monster2.addAnimation("monster",monsterRightImg);
  monster2.velocityX=2;
  monster2.scale = 0.3






  //groundGroup = new Group();
  //groundGroup.add(ground);
  //groundGroup.add(ground1);
  //groundGroup.add(ground2);
  //groundGroup.add(ground3);
  

}

function draw() {
  background(bgImg);  
  player.velocityY = player.velocityY+1  
   player.collide(ground3);
   player.collide(ground2);
   player.collide(ground1);
   player.collide(ground);
  // console.log("monster.x",monster.x);
   //console.log("hi",monster.x+monster.width/2)
   if (monster.x<=(ground.x-ground.width/2)) {
      monster.changeAnimation("right",monsterRightImg);
      monster.velocityX = 2;
     
   }
   if(monster.x>=(ground.x+ground.width/2)){
     monster.changeAnimation("left",monsterLeftImg);
     monster.velocityX = -2;
   }
   if (monster1.x<=(ground1.x-ground1.width/2)) {
    monster1.changeAnimation("right",monsterRightImg);
    monster1.velocityX = 2;
   
 }
 if(monster1.x>=(ground1.x+ground1.width/2)){
   monster1.changeAnimation("left",monsterLeftImg);
   monster1.velocityX = -2;
 }
 if (monster2.x<=(ground2.x-ground2.width/2)) {
  monster2.changeAnimation("right",monsterRightImg);
  monster2.velocityX = 2;
 
}
if(monster2.x>=(ground2.x+ground2.width/2)){
 monster2.changeAnimation("left",monsterLeftImg);
 monster2.velocityX = -2;
}
  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===RIGHT_ARROW){
    player.x = player.x+20;
    player.changeAnimation("right",playerRightImg);

    

  }
  if (keyCode===LEFT_ARROW){
    player.x = player.x-20;
    player.changeAnimation("left",playerLeftImg);

   
  }
  if (keyCode===32){
    player.velocityY = -10;
   


  }
  

}
function changeDirection(){
  
}
