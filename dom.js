let message = document.querySelectorAll('p');
let p1 = document.querySelector('#one');
let image = document.createElement('img');
const button = document.createElement('button');


for (let i = 0; i <message.length; i++){
    message[i].innerHTML = "We are coders!";
    message[i].style.color = "red";

}
p1.innerHTML = "We are developers!";