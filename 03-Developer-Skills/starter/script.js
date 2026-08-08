// Remember, we're gonna use strict mode in all scripts now!
'use strict'

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

*/

const printForecast = function (arr) {

    let day = 1
    let str = ''

    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}` + '°C in' + ` ${day}` + ' days ... '
        // Add 1 Day
        day++
        }
    console.log(`... ${str}`)
}

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

printForecast(data1)
printForecast(data2)


// Coding Challenge 2 (with or without AI)

/* Let's say you're builidng a time tracking application for freelancers.
At some point in building this app you need a function that receives daily work
hours for a certain week and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Numbers of days worked
5. Whether the week was full time (worked 35 hours or more)

Test data: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/


let nati = [7.5, 8, 6.5, 0, 8.5, 4, 0]

const workStats = function (arr) {

    // Total hours worked
    
    let sum = 0

    for(let e of arr){
        sum += e
    }
    console.log(`Total hours worked: ${sum} hours`)

    // Average daily hours

    let avg = 0
    for(let i = 0; i < arr.length; i++) {
        avg += arr[i]
    }
    avg = avg / arr.length
    console.log(`Average working time: ${avg.toFixed(2)} hours`)

    // The day with the most hours worked

    console.log(`Maximum working time: ${Math.max(...arr)} hours`)

    // Numbers of days worked

    let daysWorked = 0

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            daysWorked++
        }
    }
    console.log(`Total days worked: ${daysWorked} days`)

    // Full time or not (>35 hours)?

    if (sum < 35) {
        console.log(`Worked full time: No`)
    } else {
        console.log(`Worked full time: Yes`)
    }
}

workStats(nati)