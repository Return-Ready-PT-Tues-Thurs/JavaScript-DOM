let message = document.querySelectorAll('p');
let p1 = document.querySelector('#one');
let image = document.createElement('img');
const button = document.createElement('button');


for (let i = 0; i < message.length; i++){
    message[i].innerHTML = "We are coders!";
    message[i].style.color = "steelblue";
}

p1.innerHTML = "Developers for life!" ;

image.src  = 'kitten.jpg';
document.body.appendChild(image);

p1.style.fontSize = "40px";

button.innerHTML = "Hide Me!";                   
document.body.appendChild(button);  


document.querySelector('button').addEventListener("click", clickMe);
function clickMe() {
    var x = document.querySelector('img');
    if (x.style.display === "none") {
      x.style.display = "block";
      button.innerHTML = "Hide Me!";
    } else {
      x.style.display = "none";
      button.innerHTML = "Show Me!";
    }
  }