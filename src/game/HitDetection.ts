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
      ball.playSound();
      ball.changeYDirection();
    }
    // chekcks for hit against walls
    if (
      ball.pos.x > playfield.playfield.width - ball.width ||
      ball.pos.x < 0
    ) {
      ball.playSound();
      ball.changeXDirection(); 
    }
    // checks for hit against ceiling
    if (
      ball.pos.y < 0
    ) {
      ball.playSound();
      ball.changeYDirection();
    }
  }

  brickHit(ball: Ball, brick: Brick): boolean {
    if (
      ball.pos.x < brick.pos.x + brick.width &&
      ball.pos.x + ball.width > brick.pos.x &&
      ball.pos.y < brick.pos.y + brick.height && 
      ball.pos.y + ball.height > brick.pos.y
    ) {
      return true;
    }
    return false;
  }

  checkBricks(ball: Ball, bricks: Brick[]): boolean {
    let hit = false;

    bricks.forEach((brick, i) => {
      if(this.brickHit(ball, brick)) {
        ball.changeYDirection();

        if (brick.hp === 1) {
          brick.playSound();
          bricks.splice(i, 1);
        } else {
          ball.playSound();
          brick.hp -= 1;
        }
        hit = true;
      }
    });
    return hit;
  }
}