import { Brick } from "./Brick";
import { Ball } from "./Ball";
import { Player } from "./Player";
import { Playfield } from "./Playfield";

export class HitDetection {
  checkBallHit(ball: Ball, player: Player, playfield: Playfield): void {
    //checks for hit against player paddle
    if (
      ball.pos.x + ball.width > player.pos.x &&
      ball.pos.x < player.pos.x + player.width &&
      ball.pos.y + ball.height === player.pos.y
    ) {
      ball.changeYDirection();
    }
    // chekcks for hit against walls
    if (
      ball.pos.x > playfield.playfield.width - ball.width ||
      ball.pos.x < 0
    ) {
      ball.changeXDirection(); 
    }
    // checks for hit against ceiling
    if (
      ball.pos.y < 0 + ball.height
    ) {
      ball.changeYDirection();
    }
  }
}