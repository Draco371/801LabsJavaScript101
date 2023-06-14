var outputElement = document.getElementById('output')
var goatForm = document.getElementById('goat-form')
var inputElementA = document.getElementById('inputA')
var inputElementB = document.getElementById('inputB')
var inputElementC = document.getElementById('inputC')
var inputElementD = document.getElementById('inputD')
var gridElement = document.getElementById('grid')

var dracoShip = {
    name: 'draco',
    direction: 'left',
    x: 2,
    y: 5
}
var carinaShip = {
    name: 'carina',
    direction: 'up',
    x: 7,
    y: 9
}
var admiralShip = {
    name: 'admiral',
    direction: 'down',
    x: 2,
    y: 1
}
var beeShip = {
    name: 'bee',
    direction: 'right',
    x: 4,
    y: 0,
}

var spaceships = [
    dracoShip,
    carinaShip,
    admiralShip,
    beeShip,
]
var gridSize = 10
var moveForward = function(ship){
    if(ship.direction === 'up'){
        ship.y -= 1
    } else if(ship.direction === 'down'){
        ship.y += 1
    } else if(ship.direction === 'left'){
        ship.x -= 1
    } else if(ship.direction === 'right'){
        ship.x += 1
    }
    ship.x = (ship.x + gridSize) % gridSize
    ship.y = (ship.y + gridSize) % gridSize
}

var turnRightMap = {
    up: 'right',
    right: 'down',
    down: 'left',
    left: 'up'
}
var turnRight = function(ship){
    ship.direction = turnRightMap[ship.direction]
}

var turnLeftMap = {
    up: 'left',
    right: 'up',
    down: 'right',
    left: 'down'
}
var turnLeft = function(ship){
    ship.direction = turnLeftMap[ship.direction]
}

var displaySpaceship = function(ship){
    return `<div class="spaceship ${ship.name} x${ship.x} y${ship.y} ${ship.direction}"></div>`
}

var updateAllSpaceships = function(){
    var arrayOfHTMLStrings = spaceships.map(displaySpaceship)
    gridElement.innerHTML = arrayOfHTMLStrings.join('')
}

var insturctionMap = {
    A: moveForward,
    L: turnLeft,
    R: turnRight,
}

var handleInstruction = function(instructionCode, ship){
    var handler = insturctionMap[instructionCode]
    if(handler){
        handler(ship)
    } else {
        outputElement.innerText = `Invalid instruction "${instructionCode}"`
    }
}

var processInput = function(inputString, ship){
    var instructions = inputString.split('')
    instructions.forEach(function(instructionCode){
        handleInstruction(instructionCode, ship)
    })
}

var goatFormSubmitHandler = function(submitEvent){
    // console.log('What is submit event?', submitEvent)
    // This prevents the form from submitting and refreshing the page.
    submitEvent.preventDefault()
    var instructionsA = inputElementA.value.trim()
    var instructionsB = inputElementB.value.trim()
    var instructionsC = inputElementC.value.trim()
    var instructionsD = inputElementD.value.trim()
    outputElement.innerText = `Your input was "${instructionsA}"`
    processInput(instructionsA, admiralShip)
    processInput(instructionsB, beeShip)
    processInput(instructionsC, carinaShip)
    processInput(instructionsD, dracoShip)
    updateAllSpaceships()
}

goatForm.addEventListener('submit', goatFormSubmitHandler)

updateAllSpaceships()

