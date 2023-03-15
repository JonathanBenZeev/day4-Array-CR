'use strict'
// Write the function encrypt which gets a string and encrypts it.
// Implement the function by replacing each character code with code + 5
//  (i.e. 'r' will be replaced by: 'w').

// Write the function decrypt which decrypts a message.
// Tip: try writing this in the console: 'ABC'.charCodeAt(0)
// Tip: search for the opposite function to charCodeAt

var res = encrypt('yuval')

console.log('INPUT: yuval');
console.log('EXPECTED: ~z{fq');
console.log('RESULT:', res);

var res = decrypt('~z{fq')

console.log('INPUT:~z{fq');
console.log('EXPECTED: yuval');
console.log('RESULT:', res);

function encrypt(str) {
    return encode(str, 5)
}
function decrypt(str) {
    return encode(str, -5)
}

// Bonus:

function encode(str, diff) {
    var encodeStr = ''
    for (var i = 0; i < str.length; i++) {
        encodeStr += String.fromCharCode(str.charCodeAt(i) + diff)
    }
    return encodeStr
}




/////////////////////////////////////////////

// var res = encrypt('yuval')

// console.log('INPUT: yuval');
// console.log('EXPECTED: ~z{fq');
// console.log('RESULT:', res);

function encrypt(str) {
    var encodeStr = ''
    for (var i = 0; i < str.length; i++) {
        var currCode = str.charCodeAt(i)
        // console.log('currCode', currCode)
        var newCode = currCode + 5
        // console.log('newCode', newCode)
        var newChar = String.fromCharCode(newCode)
        // console.log('newChar', newChar)
        encodeStr += newChar
    }
    return encodeStr
}

