// Assignment #12

// Write a function called describeCountry which takes three parameters: country, population and capitalCity.
// Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`
    console.log(countryDescription)
    return countryDescription
}

const germany = describeCountry('Germany', 83, 'Berlin')

console.log(germany)


// Assignment #13

// function declaration
function percentageOfWorld1(population) {
    return (population / 7900000000) * 100
}

let Germany = 83000000
let Portugal = 33000000
let Island = 320000
let China = 1441000000

console.log(percentageOfWorld1(Germany), percentageOfWorld1(Portugal), percentageOfWorld1(Island))

// function expression

const percentageOfWorld2 = function (population) {
    return (population / 7900000000) * 100
}

console.log(percentageOfWorld2(Germany), percentageOfWorld2(Portugal), percentageOfWorld2(Island))


// Assignment #14

// Arrow function

const percentageOfWorld3 = population => population / 7900000000 * 100;

console.log(percentageOfWorld3(Germany), percentageOfWorld3(Portugal), percentageOfWorld3(Island))


// Challenge #01

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)
let scoreDolphins2 = calcAverage(85, 54, 41)
let scoreKoalas2 = calcAverage(23, 34, 27)

console.log(scoreDolphins, scoreKoalas, scoreDolphins2, scoreKoalas2)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins2, scoreKoalas2)


// Assignment #15 - Functions calling other functions

function describePopulation(country, population) {
    return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world.`
}

console.log(describePopulation('China', 1441000000))


// Assignment #16 - Introduction to arrays

const populations = new Array(Germany, Portugal, Island, China)

console.log(populations.length === 4)

const percentages = new Array(percentageOfWorld1(Germany), percentageOfWorld1(Portugal), percentageOfWorld1(Island), percentageOfWorld1(China))

console.log(percentages)


// Assignment #17 - Array operations

/* Merke! push, unshift, pop, shift, indexOf, includes */

const neighbours = new Array('Germany', 'Austria', 'Poland', 'Denmark')
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop('Utopia')
console.log(neighbours)

if (!neighbours.includes('Utopia')) {
    console.log(`Probably not a central european country :D`)
}

console.log(neighbours.indexOf('Austria'))

neighbours[neighbours.indexOf('Austria')] = 'Sweden'

console.log(neighbours)


// Challenge #02

function calcTip(billValue) {
    if (billValue < 300 && billValue > 50) {
        return (billValue * 0.15)
    } else {
        return (billValue * 0.20)
    }
}

console.log(calcTip(100))

const bills = new Array(125, 555, 44)
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))

console.log(tips)

const totals = new Array(bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2]))

console.log(totals)


// Assignment #18
// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
    country: 'Germany',
    capital: 'Berlin',
    language: 'buerocracy',
    population: '83500000',
    neighbours: ['Austria', 'Poland', 'Belgium', 'Switzerland', 'Czech Republic', 'Netherlands', 'Denmark', 'France', 'Luxembourg'],
}


// Assignment #19
//Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
//Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population = Number(myCountry.population) + 2000000
console.log(myCountry.population)

const decreasePop = myCountry['population'] - 2000000
console.log(decreasePop)

//One can say: Dot-Notation is for absolute, while bracket notation is for computed.


// Assignment #20

// Add a method called describe to the myCountry object.This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// Call the describe method.
// Add a method called checkIsland to the myCountry object.This method will set a new property on the object, called isIsland.isIsland will be true if there are no neighbouring countries, and false if there are.Use the ternary operator to set the property.

myCountry.describe = function () {
    console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
}

myCountry.describe()

myCountry.checkIsIsland = function () {
    if (myCountry.neighbours.length === 0) {
        myCountry.isIsland = true
        console.log(`${this.country} is an island.`)
    } else {
        myCountry.isIsland = false
        console.log(`${this.country} is not an island.`)
    }
}

myCountry.checkIsIsland()

const myCountry2 = {
    country: 'Utopia',
    capital: 'Heaven',
    language: 'gibberish',
    population: '1337',
    neighbours: [],
}

myCountry2.checkIsIsland = function () {
    myCountry2.neighbours.length === 0 ? this.isIsland = true && console.log(`${this.country} is an island.`) : this.isIsland = false && console.log(`${this.country} is not an island.`)
}

myCountry2.checkIsIsland()

console.log(myCountry2)


// Challenge #03

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

mark.calcBMI()

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

john.calcBMI()

console.log(`${john.fullName}s BMI (${john.bmi}) is (${john.bmi} > ${mark.bmi} ? 'higher' : 'lower';) than ${mark.fullName}s BMI (${mark.bmi})`)


// Assignment #21

// There are elections in your country! in a small town, there are only 50 voters. 
// Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

let votes

for (votes = 1; votes <= 50; votes++) {
    console.log(`Voter number ${votes} is currently voting.`)
}

// Assignment #22

/*Let's bring back the populations array from a previous assignment.
Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. 
Use the function percentageWOrld1 that you created earlier.

Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, 
and reflect on how much better this solution is.
*/

console.log(percentages)
let percentages2 = new Array()
console.log(populations)

percentageOfWorld1(populations[1])

for (i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]))
}

console.log(percentages2)

for (i = 0; i < percentages2.length; i++) {
    console.log(percentages[i] === percentages2[i])
}