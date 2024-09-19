
let username = window.prompt("What's your name");
let minutes = window.prompt("Duration in minutes you want to convert");

let remainingMinutes = minutes % 60;

let hours = (minutes - remainingMinutes) / 60;

document.write("Hello " + username + ", Your input was " + minutes + " minutes<br><br><br>") 
document.write("Output: " + hours + " hours and " + remainingMinutes + " minutes")