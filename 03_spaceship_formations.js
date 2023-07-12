var formationMap = {
    default: [
        {
            name: 'admiral',
            direction: 'down',
            x: 2,
            y: 1
        },
        {
            name: 'bee',
            direction: 'right',
            x: 5,
            y: 0,
        },
        {
            name: 'carina',
            direction: 'up',
            x: 7,
            y: 9
        }, 
        {
            name: 'draco',
            direction: 'left',
            x: 2,
            y: 5
        },
        {
            name: 'elephont',
            direction: 'up',
            x: 2,
            y: 7,
        },
    ],
    massExtinction: [
        {
            "name": "admiral",
            "direction": "down",
            "x": 2,
            "y": 4
        },
        {
            "name": "bee",
            "direction": "up",
            "x": 2,
            "y": 6
        },
        {
            "name": "carina",
            "direction": "left",
            "x": 3,
            "y": 5
        },
        {
            "name": "draco",
            "direction": "right",
            "x": 1,
            "y": 5
        },
        {
            "name": "elephont",
            "direction": "up",
            "x": 2,
            "y": 5
        }
    ],
    tournament: [
        {
            "name": "admiral",
            "direction": "right",
            "x": 0,
            "y": 0
        },
        {
            "name": "bee",
            "direction": "left",
            "x": 9,
            "y": 0
        },
        {
            "name": "carina",
            "direction": "left",
            "x": 8,
            "y": 0
        },
        {
            "name": "draco",
            "direction": "right",
            "x": 1,
            "y": 0
        },
        {
            "name": "elephont",
            "direction": "left",
            "x": 7,
            "y": 0
        }
    ]
}

var getFormation = function(formationName){
    var formation = formationMap[formationName]
    if (!formation){
        alert(`invalid formation name: ${formationName}`)
        formation = []
    }
    return formation
}

var formationButtonsElement = document.getElementById('formation-buttons')

var makeButtonForFormation = function(formationName){
    return `
<button 
    type="button" 
    data-formation-name="${formationName}"
>${formationName}</button>`
}

var arrayOfButtonFormationStrings = Object.keys(formationMap).map(makeButtonForFormation)
formationButtonsElement.innerHTML = arrayOfButtonFormationStrings.join('')

var formationButtonClickHandler = function(clickEvent){
    var formationName = clickEvent.target.dataset.formationName
    console.log('What is click event?', clickEvent)
    console.log('what is formationName?', formationName)
    if (formationName){
        spaceships = getFormation(formationName)
        displayAllSpaceships()
    }
}

formationButtonsElement.addEventListener('click', formationButtonClickHandler)