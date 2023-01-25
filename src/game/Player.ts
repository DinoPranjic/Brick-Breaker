import { Position } from "~/types";

export class Player {
  private playerImage: HTMLImageElement = new Image();
  private movingLeft: boolean;
  private movingRight: boolean;

  constructor(
    private speed: number,
    private playerWidth: number,
    private playerHeight: number,
    private position: Position,
    image: string
  ) {
    this.speed = speed;
    this.playerWidth = playerWidth;
    this.playerHeight = playerHeight;
    this.position = position;
    this.movingLeft = false;
    this.movingRight = false;
    this.playerImage.src = image;
  }

  document.addEventListener('keydown', this.handleKeyDown);
  document.addEventListener('keyup', this.handleKeyUp);

  get width(): number {
    return this.playerWidth;
  }

  get height(): number {
    return this.playerHeight;
  }

  get pos(): Position {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.playerImage;
  }

  get isMovingLeft(): boolean {
    return this.movingLeft;
  }

  get isMovingRight(): boolean {
    return this.movingRight;
  }

  movePlayer(): void {
    if (this.movingLeft) {
      this.pos.x -= this.speed;
    }

    if (this.movingRight) {
      this.pos.x += this.speed;
    }
  }

  handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
      this.movingLeft = true;
    }

    if (e.code === 'ArrowRight' || e.key === 'ArrowRight') {
      this.movingRight = true;
    }
  }

  handleKeyUp = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
      this.movingLeft = false;
    }

    if (e.code === 'ArrowRight' || e.key === 'ArrowRight') {
      this.movingRight = false;
    }
  }

};