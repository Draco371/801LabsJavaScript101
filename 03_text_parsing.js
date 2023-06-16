var outputElement = document.getElementById('output')
var goatForm = document.getElementById('goat-form')
var gridElement = document.getElementById('grid')
var inputHolderElement = document.getElementById('input-holder')

var compareShips = function(a, b) {
    if(a.x === b.x && a.y === b.y) {
        console.log(`a: ${a.name}, b: ${b.name}`)
        if(Math.random() > 0.5){
            a.expired = true;
            console.log(`${a.name} exploded`) 
        } else {
            b.expired = true;
            console.log(`${b.name} exploded`)
        }
    } else {
    }
}

var compareList = function (list, compareCallback) {
    var size = list.length;
    for (let indexA = 0; indexA < (size - 1); indexA++) {
        for (let indexB = indexA + 1; indexB < size; indexB++) {
            let a = list[indexA];
            let b = list[indexB];
            compareCallback(a, b);
        }    
    }
}

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
    x: 5,
    y: 0,
}

var elephont = {
    name: 'elephont',
    direction: 'up',
    x: 2,
    y: 7,
}

var spaceships = [
    admiralShip,
    beeShip,
    carinaShip,
    dracoShip,
    elephont,
];

var expiredFilter = function(ship){return !ship.expired;};
var processCollisions = function(){
    compareList(spaceships, compareShips);
    spaceships = spaceships.filter(expiredFilter);
};

var gridSize = 10;
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
};

var turnRightMap = {
    up: 'right',
    right: 'down',
    down: 'left',
    left: 'up'
};
var turnRight = function(ship){
    ship.direction = turnRightMap[ship.direction];
};

var turnLeftMap = {
    up: 'left',
    right: 'up',
    down: 'right',
    left: 'down'
};
var turnLeft = function(ship){
    ship.direction = turnLeftMap[ship.direction];
};

var displaySpaceship = function(ship){
    return `<div class="spaceship ${ship.name} x${ship.x} y${ship.y} ${ship.direction}"></div>`;
};

var displayAllSpaceships = function(){
    var arrayOfHTMLStrings = spaceships.map(displaySpaceship);
    gridElement.innerHTML = arrayOfHTMLStrings.join('');
};

var buildFormInput = function(ship){
    return `
    <div id="input-holder-${ship.name}">
        <label>
            <span>${ship.name}'s Ship's control panel</span>
            <textarea 
                id="input-${ship.name}"
                rows="1" 
                cols="33"
            >A</textarea>
        </label>
    </div>`;
};

var buildAllFormInputs = function(){
    var arrayOfHTMLStrings = spaceships.map(buildFormInput);
    inputHolderElement.innerHTML = arrayOfHTMLStrings.join('');
};

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

var processFormInputs = function(){
    spaceships.forEach(function(ship){
        var inputElement = document.getElementById(`input-${ship.name}`)
        var instructions = inputElement.value.trim()
        processInput(instructions, ship)
    })
}

var goatFormSubmitHandler = function(submitEvent){
    // console.log('What is submit event?', submitEvent)
    // This prevents the form from submitting and refreshing the page.
    submitEvent.preventDefault()
    processFormInputs()
    processCollisions()
    displayAllSpaceships()
}

goatForm.addEventListener('submit', goatFormSubmitHandler)

buildAllFormInputs()
displayAllSpaceships()

