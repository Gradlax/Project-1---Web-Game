//Velocity declaration, changing this will change the default game speed
let INITIAL_VELOCITY = 0.025  //.025 1.25 is insane 
let VELOCITY_INCREASE = 0.00001


//Exportation
export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem
    this.reset()
  }



// get left, right and up and down values converted into coordinantes   
  get x() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
  }

  set x(value) {
    this.ballElem.style.setProperty("--x", value)
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
  }

  set y(value) {
    this.ballElem.style.setProperty("--y", value)
  }

  rect() {
    return this.ballElem.getBoundingClientRect()
  }


// This function reset's the board everytime a player scores a goal   
  reset() {
    this.x = 50
    this.y = 50
    this.direction = { x: 0 }
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI)
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
    }
    this.velocity = INITIAL_VELOCITY
  }

  update(delta, paddleRects) {
    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    this.velocity += VELOCITY_INCREASE * delta
    const rect = this.rect()

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      this.direction.y *= -1
    }

    if (paddleRects.some(r => isCollision(r, rect))) {
      this.direction.x *= -1
    }
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min
}


// if collide with the rectangle (one per player) then bounce
function isCollision(rect1, rect2) {
  return (
    rect1.left <= rect2.right && rect1.right >= rect2.left &&
    rect1.top <= rect2.bottom && rect1.bottom >= rect2.top
  )
}

slow.addEventListener('click',function () {
  this.style.backgroundColor = '#cc0000'
},false)

export function changeSpeed(speed){
  INITIAL_VELOCITY = speed
}

