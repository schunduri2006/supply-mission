var ball,img,paddle;

function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);

ball = createSprite(30,200,20,20);
  ball.addImage(ballImage)
  ball.velocityX = 9;
  
paddle = createSprite(370,200,20,50);
  paddle.addImage(paddleImage);

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  

  randomVelocity();



  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  
  paddle.bounceOff(edges);
  paddle.bounceOff(edges);
  
  if(keyDown(UP_ARROW))
  {
   paddle.y= paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  
 
  
  drawSprites();
  
}

function randomVelocity() {
if(ball.isTouching(paddle)){
  var rand = random(3,6);
   ball.velocityY = rand;
  ball.velocityX = rand;
}

}

