import { Position } from "~/types";
import BALL_HIT_SOUND from '../assets/hit-sound.wav';

export class Ball {
  private speed: Position;
  private ballImage: HTMLImageElement = new Image();
  ballSound: HTMLAudioElement;

  constructor(
    speed: number,
    private ballSize: number,
    private position: Position,
    image: string,
  ) {
    this.ballSize = ballSize;
    this.position = position;
    this.speed = {
      x: speed,
      y: -speed
    }
    this.ballImage.src = image,
    this.ballSound = document.querySelector('#ballSound') as HTMLAudioElement;
  }

  get width(): number {
    return this.ballSize;
  }

  get height(): number {
    return this.ballSize;
  }

  get pos(): Position {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.ballImage;
  }

  changeYDirection(): void {
    this.speed.y = -this.speed.y;
  }

  changeXDirection(): void {
    this.speed.x = -this.speed.x;
  }

  moveBall(): void {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }

  playSound(): void {
    this.ballSound.play();
  }

};