const firstParagraph = document.querySelector("#firstParagraph");
const secondParagraph = document.querySelector("#secondParagraph");
const buttonAddText = document.querySelector("#buttonAddText");
const buttonAddMoreText = document.querySelector("#buttonAddMoreText");
let buttonToggleImage = document.querySelector("#buttonToggleImage");

buttonAddText.addEventListener("click", () => {
    console.log("in paragraphs");
    firstParagraph.textContent = "We are coders!";
    secondParagraph.textContent = "We are coders!";
});

buttonAddMoreText.addEventListener("click", () => {
    console.log("in first paragraph");
    firstParagraph.textContent = "Developers for life!";
});

buttonToggleImage.addEventListener("click", () => {
    if (buttonToggleImage.style.display == "none") {
        let img = document.createElement("img");
        img.src = "https://www.wilmingtonde.gov/Home/ShowPublishedImage/2524/636504239673830000";
        console.log(img);
        buttonToggleImage.appendChild(img);
    } else {
        buttonToggleImage.textContent = "Display Image";
        
    }
});




