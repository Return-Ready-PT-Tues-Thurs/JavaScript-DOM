
var first = document.getElementById("first");
var second = document.getElementById("second");
var myTextInput = document.getElementById("myTextInput");
var bigFont = document.getElementById("bigFont");


function myFunction() {
    var first = document.getElementById("first");
    if (first.innerHTML === "We are coders!") {
      first.innerHTML = "Developers for life!";
    } else {
      first.innerHTML = "We are coders!";
    }
  }
var url = 'https://avatarfiles.alphacoders.com/822/82242.png';
 
var image = new Image();
image.src = url;
document.getElementById("second").appendChild(image);


function changeTextColor() {
    var paraTag = document.getElementById("paraTag");
    if (first.innerHTML === "We are coders!") {
        paraTag.style.color = "red";
        first.style.color = "red"
    } else if (first.innerHTML = "Developers for life!") {
        paraTag.style.color = "red";
        first.style.color = "red"
    } else {
      first.style.color = "black";
    }
  }

  function changeTextBack() {
    var changeBack = document.getElementById("changeBack");
    if (first.style.color = "red") {
        paraTag.style.color = "black";
        first.style.color = "black"
    } else {
        paraTag.style.color = "red";
        first.style.color = "red"
    }
  }

  function sizeOfParaFont() {
    var first = document.getElementById("first");
    var bigFont = document.getElementById("bigFont");
    var congrats = alert(`Click "OK" to confirm the change in Text Size!`);
    if (bigFont.innerHTML === "Click Me To Change Text Size!") {
        first.style.font = "italic bold 40px arial,serif";
    } else if (first.innerHTML === "We are coders!") {
        congrats();
    } else {
        alert("Click the button to change the font!");
    }
  
}

function hideImage() {
    var hiddenImage = document.getElementById("hiddenImage");
    if (hiddenImage.innerHTML === "Click to hide Image!") {
      image.style.display = "none";
    } else {
      image.style.display = "block";
    }
  
}
