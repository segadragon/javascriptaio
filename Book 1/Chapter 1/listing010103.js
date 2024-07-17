/*

 Gamelet: a startting point for writing games
 Author: Seth Goldstein
 Version: 1.0

 Instructions:
 Inclide gamelet.js in an HTML document containing
 an element with an id of 'ball'.
 The script will detect when the arrow keys are pressed
 and will move the ball element accordingly.

*/
const ball = document.getElementById("ball"); // get the ball

document.addEventListener("keydown", handleKeyPress); // listen for keys
let position = {
  x: 0,
  y: 0,
}; // set initial position

/*
handleKeyPress
responds to certain key presses by updating position
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position.x = position.x - 10;
  }
  if (e.code === "ArrowRight") {
    position.x = position.x + 10;
  }
  if (e.code === "ArrowUp") {
    position.y = position.y - 10;
  }
  if (e.code === "ArrowDown") {
    position.y = position.y + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // reposition the ball
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = position.x + "px";
  ball.style.top = position.y + "px";
}
