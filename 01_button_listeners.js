var booleanValue = true

var goatCount = 1
var catCount = 1
var binaryNumber = 0b00001001
var hexNumber = 0x45
var superBigNumber = 39_846_572_908

var singleQuoteString = 'text'
var doubleQuoteString = "word"
var backtickString = `We have ${goatCount} goats`

var hardSingleQuoteString = 'Can\'t touch this na na na'
var easyDoubleQuoteString = "Can't touch this"
var easySingleQuoteString = '<h1 id="attack"> goat </h1>'
var hardDoubleQuoteString = "<h1 id=\"attack\"> goat </h1>"

var fancyMultiLineTemplateString = `
<div>
    <button id="goat">
        ${singleQuoteString}
    </button>
    <button id="cat">
        ${doubleQuoteString}
    </button>
</div>
`

var condensedTemplateString = `
<div>
    <button id="goat">${singleQuoteString}</button>
    <button id="cat">${doubleQuoteString}</button>
</div>
`

var hexString = 'DEADBEEF'

var hexStringConvertedToNumber = parseInt(hexString, 16)
var bigHexString = 'DEADBEEFCAFEBEE5'
var bigHexStringConvertedToNumber = parseInt(bigHexString, 16)

var numberBackToHexString = hexNumber.toString(16)
var numberAsBinaryString = hexNumber.toString(2)

var attackElement = document.getElementById('attack')
var goatButton = document.getElementById('goat')
var catButton = document.getElementById('cat')
var dogButton = document.getElementById('dog')
var beeButton = document.getElementById('bee')
var swarmButton = document.getElementById('swarm')

var goatClickHandler = function(){
    goatCount = goatCount + 1
    attackElement.innerText = `This element was eaten with ${goatCount} goats`
}

goatButton.addEventListener('click', goatClickHandler)

var catClickHandler = function(){
    catCount += 1
    attackElement.innerText = `This element was swarmed by ${catCount} cats taking a nap`
}

catButton.addEventListener('click', catClickHandler)

var swarmFunction = function(){
    attackElement.innerText = 'no swarm was ready'
}

var dogClickHandler = function(){
    swarmFunction = function(){
        attackElement.innerText = 'The dogs are everywhere!'
    }
    attackElement.innerText = `The dogs are readied`
}

dogButton.addEventListener('click', dogClickHandler)

var swarmClickHandler = function(){
    swarmFunction()
}

swarmButton.addEventListener('click', swarmClickHandler)

var beeClickHandler = function(){
    swarmFunction = function(){
        attackElement.innerText = 'The bees are everywhere!'
    }
    attackElement.innerText = `The bees are readied`
}

beeButton.addEventListener('click', beeClickHandler)