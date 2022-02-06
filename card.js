let cardButtons = document.querySelectorAll('.cardButton');
let CardOne = document.querySelectorAll('.card_1');
let CardTwo = document.querySelectorAll('.card_2');
let CardThree = document.querySelectorAll('.card_3');

for(let cardButton of cardButtons) {
    cardButton.onclick = function (event) {
        let i = nums(cardButton);
        if (CardOne[i].children[0].style.visibility == "hidden") {
            CardOne[i].children[0].style.visibility = "visible";
        } else if (CardTwo[i].children[0].style.visibility == "hidden") {
            CardTwo[i].children[0].style.visibility = "visible";
        } else if (CardThree[i].children[0].style.visibility == "hidden") {
            CardThree[i].children[0].style.visibility = "visible";
        }
        else {
            CardOne[i].children[0].style.visibility = "hidden";
            CardTwo[i].children[0].style.visibility = "hidden";
            CardThree[i].children[0].style.visibility = "hidden";
        }
    }
}

function nums(cardButton) {
    for(let i = 0; i < cardButtons.length; i++) {
        if (cardButtons[i] == cardButton) return i;
    }
}