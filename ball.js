const STARTING_VELOCITY = .03
const VELOCITY_INCREASE = .00001

export default class ball {
    constructor(ballElm) {
        this.ballElm = ballElm; 
    }

//Grabs X variable and converts to usable JS number
get x() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--x"));
    }


set x(value) {
        this.ballElm.style.setProperty("--x", value);
    }


//Grabs Y variable and converts to usable JS number

get y() {
        return parseFloat(getComputedStyle(this.ballElm).getPropertyValue("--y"))
}


set y(value) {
        this.ballElm.style.setProperty("--y", value)
}

/* 
collision() {
    return this.ballElm.getBoundingClientCollision = 
    }
*/ 

reset() {
    this.y = 50;
    //Verticle
    this.x = 50;
    //Horizontal
    this.direction = { x: 0.75, y: 0.5}
    // A is Direction of Ball, 1 will establish unit vector so it must be set to 1. 
    while (Math.abs(this.direction.x <= 0.3 || Math.abs(this.direction.x) >= 0.8)) {
        //This allows the ball to move around instead of the ball just going up and down.
        const heading = randomNumberBetween(0, 2 * Math.PI)
    // This establishes the unit vector
        this.direction = { x: Math.cos(heading), 
        y: Math.sin(heading) }
    }
this.VELOCITY = INITIAL_VELOCITY

console.log(this.direction)
}


update(delta) {
    const collision = this.collision()
    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    this.velocity += VELOCITY_INCREASE * delta

    if (collision.bottom >= window.innerHeight || collision.top <= 0)
        this.direction.y *= -1

    if (collision.left >= window.innerHeight || collision.left <= 0)
        this.direction.x *= -1
}
}


function randomNumberBetween(min, max) {
    return Math.random() * (max-min) + min 
}
