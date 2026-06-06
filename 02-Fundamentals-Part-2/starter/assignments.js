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