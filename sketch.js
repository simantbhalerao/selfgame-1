var forest, forestImg; 
var car, carImg; 
var bomb, bombImg;
var zombie1, zombie1Img, zombie1Group; 

function preload(){
    forestImg = loadImage("edit img/forest-img-2-jpeg_1.png");
    carImg = loadImage("edit img/red car edit.png");
    bombImg = loadImage("edit img/bomb edit 2.png");
    zombie1Img = loadImage("edit img/zombie edit.png");
}



function setup(){
    createCanvas(1200,600);
    forest = createSprite(600,300);
    forest.addImage(forestImg);
    forest.velocityX = -6;
    forest.scale = 6;
    var zombie1Group = createGroup;
    
    
    car = createSprite(200,500);
    car.addImage(carImg);
    car.scale = 0.3;

}

function draw(){
    background(0);
    if(forest.x < 0){
        forest.x = 100;
    }

if(keyDown("space")){
    createBomb();
}
spawnzombies();
    drawSprites();
}

function createBomb(){
    bomb = createSprite(200,500,60,10);
    bomb.addImage(bombImg);
    bomb.x = 360;
    bomb.y = car.y;
    bomb.velocityX = 4;
    bomb.scale = 0.1;  
}


function spawnzombies(){
    if(frameCount % 200 === 0){
    zombie1 = createSprite(1100,500,10,10);
   // zombie1.y = Math.round(random(10,20));
    zombie1.addImage(zombie1Img);
    zombie1.scale = 0.3;
    zombie1.velocityX = -6;

    }
}








