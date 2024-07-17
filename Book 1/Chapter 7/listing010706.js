function Vehicle(speed) {
  this.speed = speed;
  this.moveFoward = function () {
    return `Moving forward at ${this.speed}`;
  };
}
