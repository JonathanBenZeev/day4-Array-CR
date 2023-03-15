'use strict'
//printVowelsCount(str)- which receives a string and prints how many times each vowel appears.
//flipCase- which gets a string and changes the vowels to lowercase letters, and the rest to uppercase letters (i.e. Upset uPSeT).
//doubleVowels- which gets a string and doubles all the vowels in it.
// (a,e,i,o,u)

// printVowelsCount('yAheli')

function printVowelsCount(str) {
    console.log('str', str)

    var vowelStr = 'aeiou'

    for (var i = 0; i < vowelStr.length; i++) {
        var vowelsCount = 0;
        var currCharVowels = vowelStr.charAt(i)
        console.log('currCharVowels', currCharVowels)

        for (var j = 0; j < str.length; j++) {
            var currCharStr = str.charAt(j).toLowerCase()
            console.log('currCharStr', currCharStr)
            if (currCharStr === currCharVowels) vowelsCount++;
        }

        console.log(currCharVowels + ':' + vowelsCount)

    }

}


// filpCase('amar yaheli')

function filpCase(str) {

    var vowels = 'aeiou'
    var res = ''

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i)
        console.log(char)
        char = vowels.includes(char) ? char.toUpperCase() : char.toLowerCase()
        res += char
    }
    console.log(res)
}


// doubleVowels('yAheli')

function doubleVowels(str) {
    var vowels = 'aeiou'
    var newStr = ''

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i)
        console.log(char)
        if (vowels.includes(char.toLowerCase())) {
            newStr += char.repeat(2)
        } else {
            newStr += char
        }
    }
    console.log(newStr)
}


