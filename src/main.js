import Player from "./player";
import InputHandler from "./input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;

let deltaTime;
let fps;
let timestep = 1000 / 60;
let lastTime = 0;

let player = new Player(SCREEN_WIDTH, SCREEN_HEIGHT);

new InputHandler(player);

function gameLoop(timestamp) {
  ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);  //clears screen
  deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  fps = 1000 / deltaTime;

  player.update(deltaTime);
  player.draw(ctx);

  requestAnimationFrame(gameLoop); //Calls next frame. Needed for deltaTime. Needs to happen at end of game loop
}

gameLoop();
