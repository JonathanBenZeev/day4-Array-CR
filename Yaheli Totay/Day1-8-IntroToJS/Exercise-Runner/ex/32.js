'use strict'
//Read a string from the user and 
//print it backwards using a loop.

ex32()
function ex32() {
  var str = 'chen'
  // console.log('str', str)
  // console.log('str.length', str.length)
  var newStr = ''
  for (var i = str.length - 1; i >= 0; i--) {
    // console.log('i', i)
    var letter = str.charAt(i)
    // console.log(letter)
    newStr += letter
  }
  console.log('newStr ' + newStr)
}



