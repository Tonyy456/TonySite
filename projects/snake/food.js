function random_food(min, max) {
    return Math.round((Math.random() * (max-min) + min) / sidelen) * sidelen;
  }

function get_food()
{
    food_x = random_food(0, board_width - sidelen)
    food_y = random_food(0, board_height - sidelen);
    snake.forEach(function has_snake_eaten_food(part) {
        const has_eaten = part.x == food_x && part.y == food_y;
        if(has_eaten) get_food();
    });
}

function drawFood()
{
    snakeboard_ctx.fillStyle = 'red';
    snakeboard_ctx.strokestyle = 'darkred';
    snakeboard_ctx.fillRect(food_x, food_y, sidelen, sidelen);
    snakeboard_ctx.strokeRect(food_x, food_y, sidelen, sidelen);
}
