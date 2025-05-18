let paddleWidth = 100;
let paddleHeight = 15;
let paddleX;
let paddleY;
let paddleSpeed = 10;

let ballX;
let ballY;
let ballDiameter = 20;
let ballSpeedX = 2;
let ballSpeedY = 2;

function setup() {
  createCanvas(600, 400);
  paddleX = width / 2 - paddleWidth / 2;
  paddleY = height - paddleHeight - 10;
  ballX = width / 2;
  ballY = height / 2;
}

function draw() {
  background(0);
  fill(255);
  rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ellipse(ballX, ballY, ballDiameter);
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX - ballDiameter / 2 < 0 || ballX + ballDiameter / 2 > width) {
    ballSpeedX *= -1;
  }

  if (ballY - ballDiameter / 2 < 0) {
    ballSpeedY *= -1;
  }

  if (
    ballY + ballDiameter / 2 > paddleY &&
    ballX > paddleX &&
    ballX < paddleX + paddleWidth
  ) {
    ballSpeedY *= -1;
    ballY = paddleY - ballDiameter / 2;
  }

  if (ballY - ballDiameter / 2 > height) {
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
    noLoop();
  }

  if (keyIsDown(65)) {
    paddleX -= paddleSpeed;
  }
  if (keyIsDown(68)) {
    paddleX += paddleSpeed;
  }

  paddleX = constrain(paddleX, 0, width - paddleWidth);
}
