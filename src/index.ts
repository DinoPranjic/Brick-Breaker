import { Playfield } from "./game/Playfield";
import { Player } from "./game/Player";
import { Ball } from "./game/Ball";
import { Brick } from "./game/Brick";

import PADDLE_IMAGE from './assets/paddle.png';
import BALL_IMAGE from './assets/ball.png';

import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_START_X,
  BALL_SPEED,
  BALL_SIZE,
  BALL_START_X,
  BALL_START_Y,

} from './setup';

import { createBricks } from './game/createBricks';

let gameOver = false;
let score = 0;

function setGameOver(playfield: Playfield) {
  playfield.displayInfo('Game Over!');
  gameOver = false;
}

function setGameWin(playfield: Playfield) {
  playfield.displayInfo('You Win!');
  gameOver = false;
}

function gameLoop(playfield: Playfield, bricks: Brick[], player: Player) {
  playfield.clearPlayfield();
  playfield.drawBricks(bricks);
  playfield.drawAsset(player);

  if(
    (player.isMovingLeft && player.pos.x > 0) ||
    (player.isMovingRight && player.pos.x < playfield.playfield.width - player.width)
  ) {
    player.movePlayer();
  }

  requestAnimationFrame(() => gameLoop(playfield, bricks, player));
}

function startGame(playfield: Playfield) {
  score = 0;
  playfield.displayInfo('');
  playfield.displayScore(0);
  playfield.showPlayfield();

  const bricks = createBricks();

  const player = new Player(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_START_X,
      y: playfield.playfield.height - PADDLE_HEIGHT - 5
    },
    PADDLE_IMAGE
  )

  gameLoop(playfield, bricks, player);
}

const playfield = new Playfield('#playfield');

playfield.StartButtonListener(startGame);