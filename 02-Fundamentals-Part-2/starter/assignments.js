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