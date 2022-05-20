const SPEED = .001
// This will change the BALL SPEED , lower the slower 


export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

// both of these are the same thing as in our ball.js file, just adjusted the first value to reflect the paddle i. e. paddleElem instead of ballElem

set position(value) {
    this.paddleElem.style.setProperty("--position", value);
}

rect() {
    return this.paddleElem.getBoundingClientRect()
}
// BALL RESET
reset() {
    this.position = 50
}



//Update Function
update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
}

}