import { Brick } from "./Brick";

import {
  BRICK_IMAGES,
  LEVEL,
  PLAY_FIELD_COLUMNS,
  PLAY_FIELD_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_HIT_POINTS
} from './../setup';

export function createBricks(): Brick[] {
  return LEVEL.reduce((ack, element, i) => {
    const row = Math.floor((i + 1) / PLAY_FIELD_COLUMNS);
    const column = i % PLAY_FIELD_COLUMNS;

    const x = PLAY_FIELD_PADDING + column * (BRICK_WIDTH + BRICK_PADDING);
    const y = PLAY_FIELD_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

    if (element === 0) {
      return ack;
    }
    
    return [
      ...ack,
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        {x, y},
        BRICK_HIT_POINTS[element],
        BRICK_IMAGES[element]
      )
    ]
  }, [] as Brick[]);
}