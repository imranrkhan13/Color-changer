const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
let previousRandomNumber;

btn.addEventListener('click', function() {
    let randomNumber;
    
    do {
        randomNumber = getRandomNumber();
    } while (randomNumber === previousRandomNumber);

    previousRandomNumber = randomNumber;
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
