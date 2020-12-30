let name = document.querySelector('#name');
let fave = document.querySelector('#fave');
let home = document.querySelector("#home");
let fact = document.querySelector('#fact');
let listColor = document.querySelectorAll('li');

document.querySelector("body").style.fontFamily = "Arial, sans-serif";

name.innerHTML = "Kim";
fave.innerHTML = "food, anime";
home.innerHTML = "Philippines";
fact.innerHTML = "I have an annoying cat";

for( let i=0; i < listColor.length; i++){
    listColor[i].style.color = "lightblue";
}