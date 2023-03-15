'use strict'
//Read two names from the user and print the longer one

ex30()

function ex30() {
    var name1 = 'chen'
    var name2 = 'moshe'

    if (name1.length > name2.length) console.log('the longer name is ' + name1)
    else if (name2.length > name1.length) console.log('the longer name is ' + name2)
    else console.log('the length Equal ' + name1.length)
}

