window.addEventListener("load", (event) => {
    document.querySelector("body").style.fontFamily = "Arial, sans-serif";
    let image = document.createElement("img");
    image.src = "images/ratio3x2_1200.jpg";
    document.body.appendChild(image);
});


let factsAboutMe = ["Nickname: Kiki", "Favorites: jazz, piano, Halloween", "Hometown: Middletown", "Random Fact: I started playing the piano at 4 years old"];
let li = document.querySelectorAll("li"); 
for(i=0;i<factsAboutMe.length;i++){
        li[i].textContent=factsAboutMe[i];
        li[i].style.color="purple"
     }

