import { Playfield } from "./game/Playfield";
import { Player } from "./game/Player";
import { Ball } from "./game/Ball";
import { Brick } from "./game/Brick";
import { HitDetection } from "./game/HitDetection";

import PADDLE_IMAGE from './assets/paddle.png';
import BALL_IMAGE from './assets/ball.png';
// import BALL_HIT_SOUND from './assets/hit-sound.wav';

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

const playSound = (src: string): void => {
  const soundEffect = new Audio(src);
  soundEffect.play();
}

function setGameOver(playfield: Playfield) {
  playfield.displayInfo('Game Over!');
  gameOver = false;
}

function setGameWin(playfield: Playfield) {
  playfield.displayInfo('You Win!');
  gameOver = false;
}

function gameLoop(playfield: Playfield, bricks: Brick[], player: Player, ball: Ball, hitDetection: HitDetection) {
  playfield.clearPlayfield();
  playfield.drawBricks(bricks);
  playfield.drawAsset(player);
  playfield.drawAsset(ball);

  ball.moveBall();

  if(
    (player.isMovingLeft && player.pos.x > 0) ||
    (player.isMovingRight && player.pos.x < playfield.playfield.width - player.width)
  ) {
    player.movePlayer();
  }

  hitDetection.checkBallHit(ball, player, playfield);

  const brickHit = hitDetection.checkBricks(ball, bricks);

  if (brickHit) {
    playSound('./assets/hit-sound.wav');
    score += 10;
    playfield.displayScore(score);
  }

  if (ball.pos.y > playfield.playfield.height) {
    gameOver = true;
  }

  if (bricks.length === 0) {
    return setGameWin(playfield);
  }

  if (gameOver) {
    return setGameOver(playfield);
  }

  requestAnimationFrame(() => gameLoop(playfield, bricks, player, ball, hitDetection));
}

function startGame(playfield: Playfield) {
  score = 0;
  playfield.displayInfo('');
  playfield.displayScore(0);
  playfield.showPlayfield();

  const hitDetection = new HitDetection(

  )

  const bricks = createBricks();

  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    {
      x: BALL_START_X,
      y: BALL_START_Y
    },
    BALL_IMAGE,
  );

  const player = new Player(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_START_X,
      y: playfield.playfield.height - PADDLE_HEIGHT - 5
    },
    PADDLE_IMAGE
  );

  gameLoop(playfield, bricks, player, ball, hitDetection);
}

const playfield = new Playfield('#playfield');

playfield.StartButtonListener(startGame);