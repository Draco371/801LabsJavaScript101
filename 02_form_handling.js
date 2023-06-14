var outputElement = document.getElementById('output')
var goatForm = document.getElementById('goat-form')
var goatName = document.getElementById('goat-name')
var goatPowerlevel = document.getElementById('goat-powerlevel')
var goatIsGrumpy = document.getElementById('goat-is-grumpy')
var goatIsHungry = document.getElementById('goat-is-hungry')
var goatFavoriteFruit = document.getElementById('fav-fruit')

var goatFormSubmitHandler = function(submitEvent){
    // console.log('What is submit event?', submitEvent)
    // This prevents the form from submitting and refreshing the page.
    submitEvent.preventDefault()
    
    var parsedPowerlevel = parseInt(
        goatPowerlevel.value, 10
    ) || 1
    var name = goatName.value.trim()
    var isGrumpy = goatIsGrumpy.checked
    var isHungry = goatIsHungry.checked
    var isGrumpyLabel = isGrumpy ? 'very' : 'not'
    var isHungryLabel = isHungry ? 'very' : 'not'
    var favoriteFruit = goatFavoriteFruit.value || 'N/A'

    var message = name
        ? `Whats up ${name}? 
        Your power level is ${parsedPowerlevel}
        We have noticed you are ${isGrumpyLabel} grumpy.
        We have noticed you are ${isHungryLabel} hungry.
        We know that your favorite fruit is ${favoriteFruit}.
        `
        : 'We need your information...'
    outputElement.innerText = message
}

goatForm.addEventListener('submit', goatFormSubmitHandler)

