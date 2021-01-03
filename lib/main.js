document.getElementById("changeFont").style.fontFamily = "Arial, sans-serif";
document.getElementById("changeFont").style.color = "red"; 


function revealImgae() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "Manny Pic 2.jpeg");
    x.setAttribute("width", "400");
    x.setAttribute("height", "350");
    x.setAttribute("alt", "Manny Playing Basketball");
    document.body.appendChild(x);
  }


