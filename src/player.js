import { deltaTime } from "./main";

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.width = 32;
    this.height = 32;
    this.colour = "green";

    this.speed = 0.3125;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight / 2 - this.height / 2
    };

    this.direction = {
      x: 0,
      y: 0
    };
  }

  draw(ctx) {
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.direction.x * this.speed;
    this.position.y += this.direction.y * this.speed;
  }
}
