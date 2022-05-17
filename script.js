// Import 
import Ball from './ball.js'
import Paddle from './paddle'


const ball = new Ball(document.getElementById("ball"));

const playerPaddle = new Paddle(document.getElementById("player-paddle");

const computerPaddle = new Paddle(document.getElementById("computer-paddle");


let lastTime
//Update
function update(time) {
    if (lastTime != null) {
    const delta = time - lastTime
ball.update(delta)
    computerPaddle.update(delta, ball.y)
    // All movement in game will be based with Delta
    }

    lastTime = time
    console.log(time)
    window.requestAnimationFrame(update)


}



// Was going to use set Interval here but I have decided that this is not the most accurate way to build this function. So I picked requestAnimation instead 
window.requestAnimationFrame(update)

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
    // this is a value conversion
})