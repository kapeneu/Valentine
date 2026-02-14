const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");
const mainImage = document.getElementById("mainImage");
const buttons = document.querySelector(".buttons");
const heartsContainer = document.getElementById("hearts-container");

let moveCount = 0;
let scale = 1;

const emojis = ["💖","💘","💕","💞","🥰","😍","✨"];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    heart.style.fontSize = (Math.random() * 25 + 25) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 200);

noBtn.addEventListener("mouseover", () => {
    moveCount++;

    const card = document.querySelector(".card");
    const cardRect = card.getBoundingClientRect();

    const maxX = cardRect.width - noBtn.offsetWidth;
    const maxY = cardRect.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    scale -= 0.04;
    if (scale > 0.2) {
        noBtn.style.transform = `scale(${scale})`;
    }

    if (moveCount >= 15) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    buttons.style.display = "none";
    mainImage.style.display = "none";
    finalMessage.classList.remove("hidden");

    for (let i = 0; i < 40; i++) {
        setTimeout(createHeart, i * 40);
    }
});
