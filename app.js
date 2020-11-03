function convertToPixels( n ) {
    if ( n > 79 ){
        n = 79
    }
    if ( n < 0) {
        n = 0
    }
    return n * 8
}

function draw () {
    updateLocation()
    drawSnake()
    setTimeout(() => {
        window.requestAnimationFrame(draw)
    }, gameSpeed);
}

function drawSnake () {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.strokeStyle = 'white'
        context.lineWidth = 1

        snakeCoordinates.forEach( c => {
            context.fillRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
            context.strokeRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
    })
}

function updateSnakeLocation () {
    let newX, newY

function drawFood () {
    context.beginPath()
    context.arc(75, 75, 50, 0, Math.PI * 2, true)
    context.strokeStyle = 'red'
    context.stroke()
}

function updateFoodLocation () {
    let x, y

    do {
        x = Math.floor(Math.random()* 80)
        y = Math.floor(Math.random()* 80)
    } while (snakeCoordinates.includes[x, y]) )

    return [x, y]
}

    switch (direction) {
        case 'up' :
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1] - 1
            break
        case 'down' :
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1] + 1
            break
        case 'left' :
            newX = snakeCoordinates[0][0] - 1
            newY = snakeCoordinates[0][1]
            break
        case 'right' :
            newX = snakeCoordinates[0][0] + 1
            newY = snakeCoordinates[0][1]
            break
    }

    snakeCoordinates.unshift([newX, newY])
    snakeCoordinates.pop()
}

let snakeCoordinates = [
    [40, 40],
    [40, 41],
    [39, 41],
    [38, 41]
]

let foodCoordinates = getFoodCoordinates()
console.log(foodCoordinates)

const canvas = document.getElementById('gameBoardCanvas')
const context = canvas.getContext('2d')
let direction = 'up'
let gameSpeed = 100
let isGameOver = false

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if ( direction  == 'left' || direction == 'right' ){
                direction = 'up'
            } else if ( direction == 'down') {
                isGameOver = true
            }
            break
        case 'ArrowDown':
            if ( direction  == 'left' || direction == 'right' ){
                direction = 'up'
            } else if ( direction == 'down') {
                isGameOver = true
            }
        case 'ArrowLeft':
            direction = 'left'
            break
        case 'ArrowRight':
            direction = 'right'
            break
    }
})

draw()
