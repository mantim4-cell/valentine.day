const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noClickCount = 0;

yesBtn.addEventListener("click", () => {
    alert("Best decision ever ❤️🥰");
});

noBtn.addEventListener("click", () => {
    noClickCount++;

    if (noClickCount <= 5) {
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 10) + "px";
        yesBtn.style.padding = (12 + noClickCount * 5) + "px " + (25 + noClickCount * 10) + "px";
    } 
    else {
        window.location.href = "second.html";
    }
});

/* Create floating hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);