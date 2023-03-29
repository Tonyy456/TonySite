
const board_border = "white";
const board_background = "black";
const snake_col = "green";
const snake_border = "black";
const sidelen = 30;
let board_width = Math.ceil(screen.width / 2 / sidelen) * sidelen;
let board_height = Math.ceil(screen.height / 2 / sidelen) * sidelen;
const gameTicks = 125;
let changing_direction = false;
let dx = sidelen;
let dy = 0;
let score = 5;

let snake = [
  { x: 5*sidelen, y: sidelen*3 },
  { x: 4* sidelen, y: sidelen*3 },
  { x: 3* sidelen, y: sidelen*3 },
  { x: 2*sidelen, y: sidelen*3},
  { x: 1* sidelen, y: sidelen*3 },
];

// Get the canvas element
let snakeboard = document.getElementById("snakeboard");
snakeboard.width = board_width;
snakeboard.height = board_height;
// Return a two dimensional drawing context
let snakeboard_ctx = snakeboard.getContext("2d");

// Draw the snake on the canvas
function drawSnake() {
  // Draw each part
  snake.forEach(drawSnakePart);
}

// Draw one snake part
function drawSnakePart(snakePart) {
  // Set the colour of the snake part
  snakeboard_ctx.fillStyle = snake_col;
  // Set the border colour of the snake part
  snakeboard_ctx.strokestyle = snake_border;
  // Draw a "filled" rectangle to represent the snake part at the coordinates
  // the part is located
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, sidelen, sidelen);
  // Draw a border around the snake part
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, sidelen, sidelen);
}

function moveSnake() {
  let head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  let has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;

  if (has_eaten_food) {  
    score += 1;
    document.getElementById("score").innerHTML = score;
    get_food();
  } else {
    snake.pop();
  }
}

function change_direction(event) {
  var LEFT_KEY = 37;
  var RIGHT_KEY = 39;
  var UP_KEY = 38;
  var DOWN_KEY = 40;
  var W_KEY = 87;
  var A_KEY = 65;
  var S_KEY = 83;
  var D_KEY = 68;
  var R_KEY = 82;

  
  
  var keyPressed = event.keyCode;
  var goingUp = dy === -sidelen;
  var goingDown = dy === sidelen;
  var goingRight = dx === sidelen;
  var goingLeft = dx === -sidelen;

  
  if (changing_direction) return;
  changing_direction = true;
  
  if(keyPressed === R_KEY) {
     reset(); 
    }
  
  if ((keyPressed === LEFT_KEY || keyPressed === A_KEY) && !goingRight) {
    dx = -sidelen;
    dy = 0;
  }

  if ((keyPressed === RIGHT_KEY || keyPressed === D_KEY) && !goingLeft) {
    dx = sidelen;
    dy = 0;
  }

  if ((keyPressed === UP_KEY || keyPressed === W_KEY) && !goingDown) {
    dx = 0;
    dy = -sidelen;
  }

  if ((keyPressed === DOWN_KEY || keyPressed === S_KEY) && !goingUp) {
    dx = 0;
    dy = sidelen;
  }
}
