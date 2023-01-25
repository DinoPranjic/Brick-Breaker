import BLUE_BRICK from './assets/blue-brick.png';
import GREEN_BRICK from './assets/green-brick.png';
import GREY_BRICK from './assets/grey-brick.png';
import PURPLE_BRICK from './assets/purple-brick.png';
import YELLOW_BRICK from './assets/yellow-brick.png';
import RED_BRICK from './assets/red-brick.png';

const canvas: HTMLCanvasElement | null = document.querySelector('#playField');

export const PLAY_FIELD_PADDING = 10;
export const PLAY_FIELD_ROWS = 20;
export const PLAY_FIELD_COLUMNS = 10;
export const BRICK_PADDING = 5;

export const BRICK_WIDTH = canvas ? Math.floor((canvas.width - PLAY_FIELD_PADDING * 2) / PLAY_FIELD_COLUMNS) - BRICK_PADDING : 100;

export const BRICK_HEIGHT = canvas ? Math.floor((canvas.height - PLAY_FIELD_PADDING * 2) / PLAY_FIELD_ROWS) - BRICK_PADDING : 30;

export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 25;
export const PADDLE_START_X = 450;
export const PADDLE_SPEED = 10;
export const BALL_SPEED = 5;
export const BALL_SIZE = 20;
export const BALL_START_X = 500;
export const BALL_START_Y = 400;

export const BRICK_IMAGES: {[key:number]: string} = {
  1: RED_BRICK,
  2: GREEN_BRICK,
  3: YELLOW_BRICK,
  4: BLUE_BRICK,
  5: PURPLE_BRICK,
  6: GREY_BRICK
};

export const BRICK_HIT_POINTS: {[key:number]: number} = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1
};

export const LEVEL = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
  0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
  0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 
  0, 0, 5, 5, 6, 6, 5, 5, 0, 0,
  0, 0, 6, 6, 6, 6, 6, 6, 0, 0,
];