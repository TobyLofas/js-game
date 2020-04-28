import Player from "./player";
import InputHandler from "./input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;

let player = new Player(SCREEN_WIDTH, SCREEN_HEIGHT);

new InputHandler(player);

let deltaTime;

let fps;
let timestep = 1000 / 60;

let lastTime = 0;

function gameLoop(timestamp) {
  ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  player.update(deltaTime);

  player.draw(ctx);

  fps = 1000 / deltaTime;

  //Calls next frame. Needed for deltaTime. Needs to happen at end of game loop
  requestAnimationFrame(gameLoop);
}

gameLoop();
