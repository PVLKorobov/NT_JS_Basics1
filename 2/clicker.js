document.addEventListener("DOMContentLoaded", () => {
    const cookieImage = document.getElementById("cookie");
    const clickCounter = document.getElementById("clicker__counter");
    const clickSpeed = document.getElementById("clicker__speed");
    var millisecondsSinceClick = 0;

    cookieImage.onclick = () => {
        clickCounter.textContent = Number(clickCounter.textContent) + 1;
        clickSpeed.textContent = (1/millisecondsSinceClick).toFixed(2);
        millisecondsSinceClick = 0;

        cookieImage.width += 20;
        setTimeout(() => {
            cookieImage.width -= 20;
        }, 100)
    }

    setInterval(() => {
        millisecondsSinceClick += 0.01;
    }, 10)
})