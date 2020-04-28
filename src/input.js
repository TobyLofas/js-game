export default class InputHandler {
  constructor(player) {
    this.axis = {
      x: 0,
      y: 0
    };

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 65: //a
          if (!event.repeat) {
            player.direction.x += 1;
            //this.axis.x += 1;
          }
          break;

        case 68: //d
          if (!event.repeat) {
            player.direction.x -= 1;
            //this.axis.x -= 1;
          }
          break;

        case 87: //w
          if (!event.repeat) {
            player.direction.y += 1;
            //this.axis.y += 1;
          }
          break;

        case 83: //s
          if (!event.repeat) {
            player.direction.y -= 1;
            //this.axis.y -= 1;
          }
          break;

        default:
      }
    });
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 65: //a
          if (!event.repeat) {
            player.direction.x -= 1;
            //this.axis.y += 1;
          }
          break;

        case 68: //d
          if (!event.repeat) {
            player.direction.x += 1;
            //this.axis.y += 1;
          }
          break;

        case 87: //w
          if (!event.repeat) {
            player.direction.y -= 1;
            //this.axis.y += 1;
          }
          break;

        case 83: //s
          if (!event.repeat) {
            player.direction.y += 1;
            //this.axis.y += 1;
          }
          break;

        default:
      }
    });
  }
}
