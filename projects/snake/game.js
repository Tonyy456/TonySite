// Start game
get_food();
main();

var timeoutID = 0;


document.addEventListener("keydown", change_direction);

// main function called repeatedly to keep the game running
function main() {
  if (has_game_ended()) return;
  changing_direction = false;

  timeoutID = setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    main();
  }, gameTicks);
}

function reset() {
  
  changing_direction = false;
  dx = sidelen;
  dy = 0;
  score = 5;
  document.getElementById("score").innerHTML = score;

snake = [
  { x: 5*sidelen, y: sidelen*3 },
  { x: 4* sidelen, y: sidelen*3 },
  { x: 3* sidelen, y: sidelen*3 },
  { x: 2*sidelen, y: sidelen*3},
  { x: 1* sidelen, y: sidelen*3 },
];

clearTimeout(timeoutID);

  main();
}

// draw a border around the canvas
function clearCanvas() {
  //  Select the colour to fill the drawing
  snakeboard_ctx.fillStyle = board_background;
  //  Select the colour for the border of the canvas
  snakeboard_ctx.strokeStyle = board_border;
  // Draw a "filled" rectangle to cover the entire canvas
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  // Draw a "border" around the entire canvas
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

function has_game_ended() {
  for (let i = 4; i < snake.length; i++) {
    const has_collided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (has_collided) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > board_width - sidelen;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > board_height - sidelen;

  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}
