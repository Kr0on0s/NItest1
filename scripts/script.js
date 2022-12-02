const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let cardOneImg, cardTwoImg;
let disableDeck = false;


function activateCheats() {
    document.body.style.backgroundImage = "url('images/cheatBackground.png')";

    var audio = new Audio('audio/pling.mp3');
    audio.play();

    alert("cheats activated");
}

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        // recup le virus de l'image et appeler map.get("hepatite_c")
        disableDeck = true;

        cardOneImg = cardOne.querySelector(".back-view img").src;
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        var verif = cardTwoImg.indexOf("img-1")
        if (verif !== -1){
            setTimeout(() => {popup_vih(); }, 500);
        }
        var verif = cardTwoImg.indexOf("img-2")
        if (verif !== -1){
            setTimeout(() => {popup_hepatite_b(); }, 500);
        }
        var verif = cardTwoImg.indexOf("img-3")
        if (verif !== -1){
            setTimeout(() => {popup_hepatite_c(); }, 500);
        }
        var verif = cardTwoImg.indexOf("img-4")
        if (verif !== -1){
            setTimeout(() => {popup_herpes(); }, 500);
        }
        var verif = cardTwoImg.indexOf("img-5")
        if (verif !== -1){
            setTimeout(() => {popup_bg(); }, 500);
        }
        var verif = cardTwoImg.indexOf("img-6")
        if (verif !== -1){
            setTimeout(() => {popup_chlamydia(); }, 500);
        }
        var verif = cardTwoImg.indexOf("img-7")
        if (verif !== -1){
            setTimeout(() => {popup_syphilis(); }, 500);
        }
        var verif = cardTwoImg.indexOf("img-8")
        if (verif !== -1){
            setTimeout(() => {popup_papillomavirus(); }, 500);
        }

        if(matched == 8) {
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
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

// Get the modal
var modal2 = document.getElementById("vih");
var modal3 = document.getElementById("hepatite_b")
var modal4 = document.getElementById("hepatite_c")
var modal5 = document.getElementById("herpes")
var modal6 = document.getElementById("bg")
var modal7 = document.getElementById("chlamydia")
var modal8 = document.getElementById("syphilis")
var modal9 = document.getElementById("papillomavirus")


function popup_vih() {
    modal2.style.display = "block";
}

function popup_hepatite_b(){
    modal3.style.display = "block";
}

function popup_hepatite_c(){
    modal4.style.display = "block";
}

function popup_herpes(){
    modal5.style.display = "block";
}

function popup_bg(){
    modal6.style.display = "block"
}

function popup_chlamydia(){
    modal7.style.display = "block"
}

function popup_syphilis(){
    modal8.style.display = "block"
}

function popup_papillomavirus(){
    modal9.style.display = "block"
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
    if (event.target == modal9) {
        modal9.style.display = "none";
    }
} 







shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
