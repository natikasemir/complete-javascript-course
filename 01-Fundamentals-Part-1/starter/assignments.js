// Assignment 01

const country = 'Germany'
const continent = 'Europe'
const population = 83000000

console.log(country, continent, population)

// Assignment 02

const isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// Assignment 03

language = 'German'
console.log(language)

// Assignment 04

const halfPopulation = population / 2
console.log(halfPopulation)

console.log(population + 1)

const populationFinland = 6000000

if (population < populationFinland) {
  console.log(country + ' has less people than Finland')
} else {
  console.log('You live in a loser country.')
};

const description = 'You know, living in ' + country + ' and speaking ' + language + ' is not that easy.'

console.log(description)

// Challenge 01

const weightMark = 78
const heightMark = 1.69
const weightJohn = 92
const heightJohn = 1.95

const BMIMark = weightMark / heightMark ** 2
const BMIJohn = weightJohn / heightJohn ** 2

const markHigherBMI = BMIMark > BMIJohn

console.log(markHigherBMI)

// Assignment #05

const name = 'Nati'
const job = 'Junior Frontend Developer'
const birthYear = 1994
const currentYear = 2026

console.log(`Hello, my Name is ${name}! I am a ${job} and I'm ${currentYear - birthYear} years old.`)

// Assignment #06

if (population > 33000000) {
  console.log(`The population of ${country} is higher than average.`)
} else {
  console.log(`The population of ${country} is below average.`)
}

// Assignment #07

console.log('9' - '5') // -> 4
console.log('19' - '13' + '17') // -> 617
console.log('19' - '13' + 17) // -> 23
console.log('123' < 57) // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2) // ->1143

// Assignment #08

/* const numNeighbors = Number(prompt('How many neighbour countries does your contry have?'))

if (numNeighbors === 1) {
    console.log('Only 1 border!')
} else if (numNeighbors > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}
*/

// Assignment #09
// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

if (language === 'English' && population < 50000000 && !isIsland) {
  console.log(`Sarah should definitely live in ${country}!`)
} else {
  console.log('Sarah should live in Portugal. Or elsewhere. Nobody cares anyway.')
}

// Assignment #10

switch (language) {
  case 'chinese' || 'mandarin':
    console.log('MOST number of native speakers!')
    break
  case 'spanish':
    console.log('2nd place in number of native speakers')
    break
  case 'english':
    console.log('3rd place')
    break
  case 'hindi':
    console.log('Number 4')
    break
  case 'arabic':
    console.log('5th most spoken language')
    break
  default:
    console.log('This is also a cool language, yes')
}

// Nati, merk Dir den Unterschied zwischen Statement && Expression!

// Assignment #11 - Ternary Operator

const populationNote = population > 33000000 ? `${country}s population is above average` : `${country}s population is below average`

console.log(populationNote)
