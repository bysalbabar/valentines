const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClicked() {
  document.getElementById("message").innerHTML =
    "Yayyy 😍 I knew it! Happy Valentine’s Day ❤️🌹";
}
