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