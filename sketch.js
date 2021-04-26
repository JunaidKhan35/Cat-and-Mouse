var bgImg;
var cat, mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(830,670,50,30);
  cat.addAnimation("cat",catImg1);
  cat.scale = 0.2

  mouse = createSprite(100,660,50,30);
  mouse.addAnimation("Mouse",mouseImg1);
  mouse.scale = 0.2

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width/2)){
      cat.addAnimation("Cat_Stop",catImg3);
      cat.changeAnimation("Cat_Stop");
      cat.velocityX = 0;

     mouse.addAnimation("Mouse_Stop",mouseImg3);
     mouse.changeAnimation("Mouse_Stop")
    
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("LEFT_ARROW")){
    cat.velocityX = -5;
    cat.addAnimation("tom",catImg2);
    cat.changeAnimation("tom")
  
    mouse.addAnimation("jerry",mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("jerry");

  }

  
}
