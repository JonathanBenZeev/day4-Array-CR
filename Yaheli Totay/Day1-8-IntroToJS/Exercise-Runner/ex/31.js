'use strict'
//Read a string from the user and print:
//Its length.
//Its first and last characters.
//The string in all uppercase and then, in all lowercase letters.

ex31()
function ex31() {
    var str = 'Hello'

    console.log('the length ' + str.length) // 5
    console.log('the frist letter ' + str.charAt(0))
    console.log('the last letter ' + str.charAt(str.length - 1))
    console.log(str.toUpperCase())
    console.log(str.toLowerCase())
}