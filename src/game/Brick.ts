import { Position } from "~/types";

export class Brick {
  private brickImage: HTMLImageElement = new Image();

  constructor(
    private brickWidth: number,
    private brickHeight: number,
    private position: Position,
    private brickHitPoints: number,
    image: string
  ) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.position = position;
    this.brickHitPoints = brickHitPoints;
    this.brickImage.src = image;
  }

  get width(): number {
    return this.brickWidth;
  }

  get height(): number {
    return this.brickHeight;
  }

  get pos(): Position {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.brickImage;
  }

  get hp(): number {
    return this.brickHitPoints;
  }

  set hp(points: number) {
    this.brickHitPoints = points;
  }

  

};