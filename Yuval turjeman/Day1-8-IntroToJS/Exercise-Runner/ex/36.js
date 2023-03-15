'use strict'
// Exercise 36 - Longest and Shortest Names
// Implement a function which receives a string of comma separated names,
//  for example: 'Igal,Moshe,Haim',
//  and prints the longest and shortest names.
// Tip: use the function indexOf. note that the function accepts two
//  parameters.
printLongestAndShortest('igal,moshe,haim,yuval,ted,danielle')

function printLongestAndShortest(str) {

    if (!str.endsWith(',')) str += ','
    console.log('New string:', str)

    var longestName = ''
    var shortestName = str
    var currName = ''
    var commaIdx = 0
    for (var i = 0; i < str.length; i = commaIdx + 1) { // 0 , 5
        commaIdx = str.indexOf(',', i) // 4 , 10
        currName = str.substring(i, commaIdx) //'igal' , 'moshe'
        if (currName.length > longestName.length) longestName = currName
        if (currName.length < shortestName.length) shortestName = currName
    }
    console.log('Longest name:', longestName)
    console.log('Shortest name:', shortestName)
}   