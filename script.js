// Import 
import Ball, { changeSpeed } from './ball.js'
import Paddle from './paddle.js'


//Variable Declaration
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")


//Update
let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        computerPaddle.update(delta, ball.y)
        const hue = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--hue")
        )
    
        document.documentElement.style.setProperty("--hue", hue + delta * 0.01)
    
        if (isLose()) handleLose()
      }
    
      lastTime = time
      window.requestAnimationFrame(update)
    }
    
    function isLose() {
      const rect = ball.rect()
      return rect.right >= window.innerWidth || rect.left <= 0
    }
    
    function handleLose() {
      const rect = ball.rect()
      if (rect.right >= window.innerWidth) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
      } else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
      }
      ball.reset()
      computerPaddle.reset()
    }
    
    document.addEventListener("mousemove", e => {
      playerPaddle.position = (e.y / window.innerHeight) * 100
    })
    
    window.requestAnimationFrame(update)
  

  //  object.addEventListener("change", myScript);


export function myFunction() {
      changeSpeed(document.getElementById("speedID").value * .02)
     }


