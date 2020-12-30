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
document.getElementById('second').appendChild(image);


