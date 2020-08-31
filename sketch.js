//Create variables here
var dog, happyDog
var database
var foodS, foodStock
function preload(){
  //load images here
  dogImg = loadImage("dogImg.png")
  happyDogImg = loadImage("dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dogSprite = createSprite(250,250,100,100)
  dogSprite.addImage(dogImg)
  dogSprite.scale = 0.7;
  foodStock = database.ref("Food");
foodStock.on("value",readStock);
  writeStock(20);
}


function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW) && foodS>0){
   foodS --
 writeStock(foodS);
 dogSprite.addImage(happyDogImg)
 }

  drawSprites();
  //add styles here
 fill("yellow");
 textSize(18);
 text("Food Left Is "+foodS,50,50)

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}


