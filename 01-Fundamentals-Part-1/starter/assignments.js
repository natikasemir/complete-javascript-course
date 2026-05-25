// Assignment 01

let country = 'Germany';
let continent = 'Europe';
let population = 83000000;

console.log(country, continent, population);


// Assignment 02

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// Assignment 03

language = 'German';
console.log(language);


// Assignment 04

let halfPopulation = population / 2;
console.log(halfPopulation);

console.log(population + 1)

let populationFinland = 6000000;

if (population < populationFinland) {
    console.log(country + ' has less people than Finland');
}
else {
    console.log('You live in a loser country.')
};

let description = 'You know, living in ' + country + ' and speaking ' + language + ' is not that easy.';

console.log(description);


// Challenge 01

let weightMark = 78;
const heightMark = 1.69;
let weightJohn = 92;
const heightJohn = 1.95;

let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;

let markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);


// Assignment #05

const name = 'Nati';
const job = 'Junior Frontend Developer';
const birthYear = 1994;
const currentYear = 2026;

console.log(`Hello, my Name is ${name}! I am a ${job} and I'm ${currentYear - birthYear} years old.`);