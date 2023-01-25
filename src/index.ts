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

function gameLoop(playfield: Playfield, bricks: Brick[], player: Player, ball: Ball) {

}

function startGame(playfield: Playfield) {

}

const playfield = new Playfield('#playfield');

playfield.StartButtonListener(startGame);