'use strict'

let hasDriversLicense = false
let canDrive = false

const passTest = true
if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log(`I BELIEVE I CAN DRIVE`)

function logger() {
    console.log(`My name is Farty McFly.`)
}

logger()