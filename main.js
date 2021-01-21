// Change the body style so it has a `font-family` of `Arial, sans-serif`.
document.querySelector("body").style.fontFamily = "Arial, sans-serif";

//Replace each of the values with your own information.
document.getElementById("nickname").textContent = "Nickname: cayenne pepper";
document.getElementById("favorites").textContent =
  "Favorites: music, cheesecake, The Office";
document.getElementById("hometown").textContent = "Hometown: New Castle";
document.getElementById("randomFact").textContent =
  "Random Fact: Red is my favorite color.";

//Change the `<li>` style to a color of your choosing. Cannot be black.
let liText = document.querySelectorAll("li");
for (let i = 0; i < liText.length; i++) {
  liText[i].style.color = "#0E497C";
}

let x = document.createElement("img");
x.setAttribute("src", "./img/Myphoto.JPG");
x.setAttribute("width", "304");
x.setAttribute("height", "228");
x.setAttribute("alt", "photo of me");
document.body.appendChild(x);

