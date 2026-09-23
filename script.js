function yes() {
    document.getElementById("result").textContent = "Умнічка! ❤️";
}

function moveButton() {
    let button = document.getElementById("no");

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    button.style.left = x + "px";
    button.style.top = y + "px";
}