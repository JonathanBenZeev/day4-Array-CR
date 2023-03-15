'use strict'
// Exercise 37 - Generate Password
// Implement a function named generatePass(passLength) which generates
//  a password of the specified length.
//   The password is made out of random digits and letters.
var res = generatePass(10)
console.log(res)

function generatePass(passLength) {
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789'
    var password = ''

    for (var i = 0; i < passLength; i++) {
        var randIdx = getRandomInt(0, str.length)
        password += str.charAt(randIdx)
    }
    return password
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
