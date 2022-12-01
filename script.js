function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function changeColor(){
    const body = document.querySelector("body")
    body.style.backgroundColor = `rgb(${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)})`;
}   
