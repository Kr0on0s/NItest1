const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let vih = `images/img-1.png`
let hepatite_b = `images/img-2.png`
let hepatite_c = `images/img-3.png`
let herpes = `images/img-4.png`
let blennorragie_gonococcique = `images/img-5.png`
let chlamydia = `images/img-6.png`
let syphilis = `images/img-7.png`
let papillomavirus = `images/img-8.png`
let map = new Map()
map.set("herpes", "texteaffiche")
map.set("vih", "texteaffiche")
map.set("chlamydia", "texteaffiche")
map.set("herpes", "texteaffiche")
map.set("herpes", "texteaffiche")



function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        // recup le virus de l'image et appeler map.get("hepatite_c")
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src;
        let idc1 = cardOne.querySelector(".back-view img").id;
        map.get(idc1);

        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            popup_win()
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        let children = card.children;
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

// Get the modal
var modal = document.getElementById("win");
;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function popup_win() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
