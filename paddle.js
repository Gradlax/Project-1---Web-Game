//Speed 
const SPEED = .03

export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
    }


get position() {
    return parseFloat(
        getComputedStyle(this.paddleElem).getPropertyValue("--position"));
}

// both of these are the same thing as in our ball.js file, just adjusted the first value to reflect the paddle i. e. paddleElem instead of ballElem

set position(value) {
    this.paddleElem.style.setProperty("--position", value);
}

//Update Function
update(delta, ballHeight) {
    this.position += SPEEDV * delta * (ballHeight - this.position)


}

}