let cardButtons = document.querySelectorAll('.cardButton');

for(let cardButton of cardButtons) {
    cardButton.onclick = function () {
        let neibour = this.previousSibling.previousSibling;
        if (neibour.style.visibility == "hidden") {
            neibour.style.visibility = "visible";
        } else {
            neibour.style.visibility = "hidden";
        }
    };
}