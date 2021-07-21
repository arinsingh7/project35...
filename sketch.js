var dog;
var happydog;
var database;
var foodS;
var foodStock;
var saddog;


function preload()
{
  saddog = loadImage("dogImg.png");
	happydog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250, 350, 40, 40);
  dog.addImage(saddog);
  dog.scale = 1/6;
  
  foodStock = database.ref("food");
  foodStock.on("value", readStock);

}


function draw() {  
background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();

  
 
  textSize(45);
  stroke(3);
  fill("black");
  text("Note : Press UP_ARROW Key To Feed Drago Milk", 250, 100);
  
}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x){

  if(x<= 0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food : x
  })
}

