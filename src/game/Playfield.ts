import { Ball } from "./Ball";
import { Brick } from "./Brick";
import { Player } from "./Player";

export class Playfield {
  private playfield: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(name: string) {
    this.playfield = document.querySelector(name) as HTMLCanvasElement;
    this.context = this.playfield.getContext('2d');
    this.scoreDisplay = document.querySelector('#score');
    this.start = document.querySelector('#start');
    this.info = document.querySelector('#info');
  }

  clearPlayfield(): void {
    this.context?.clearRect(0, 0, this.playfield.width, this.playfield.height);
  }

  StartButtonListener(startFunction: (playfield: Playfield) => void): void {
    this.start?.addEventListener('click', () => startFunction(this));
  }

  displayScore(score: number): void {
    if (this.scoreDisplay) {
      this.scoreDisplay.innerHTML = score.toString();
    }
  }

  displayInfo(text: string): void {
    if (this.info) {
      this.info.innerHTML = text;
    }
  }

  drawAsset(asset: Brick | Ball | Player): void {
    if (!asset) {
      return;
    } 

    this.context?.drawImage(
      asset.image,
      asset.pos.x,
      asset.pos.y,
      asset.width,
      asset.height
    )
  }

  drawBricks(bricks: Brick[]): void {
    bricks.forEach(brick => this.drawAsset(brick))
  }

}