'use strict'
// Exercise 34 - myIndexOf()
// Implement a function named myIndexOf(str, searchStr) 
// which receives two strings.
// The function returns the index of the second string 
// within the first, or -1 
// if it wasn’t found (do not use the built-in indexOf()function… ).

var str = 'yuvalturjeman'
var searchStr = 'fty'
var myIndex = myIndexOf(str, searchStr)
// Unit Testing:
console.log('INPUT: str:', str, 'searchStr:', searchStr);
console.log('EXPECTED:', 5);
console.log('RESULT:', myIndex);

function myIndexOf(str, searchStr) {
    // console.log('str.length', str.length)
    // console.log('str.length - searchStr.length ', str.length - searchStr.length + 1)
    for (var i = 0; i <= str.length - searchStr.length; i++) {

        var currSubStr = str.substring(i, i + searchStr.length) // 1-4
        // console.log(currSubStr)
        if (currSubStr === searchStr) return i
    }
    return -1
}