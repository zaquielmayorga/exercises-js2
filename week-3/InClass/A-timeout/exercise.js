/*
================
EXERCISE 1

Task 1

Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).



Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

// task 1

const body = document.querySelector('body')


// task 2

const changeColourInteral = setInterval(()=> {
    const numeroAleatorio = Math.random() > .5
    body.style.backgroundColor = numeroAleatorio ? 'cyan' : 'blue'

}, 5000)

console.log(changeColourInteral)