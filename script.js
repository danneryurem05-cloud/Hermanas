const petalsLayer = document.getElementById("petals");
const giftButton = document.getElementById("giftButton");
const message = document.getElementById("message");
const morePetalsButton = document.getElementById("morePetals");
const petalSymbols = ["🌸", "🌷", "💗", "✿", "✨", "💕"];

function makePetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (14 + Math.random() * 19) + "px";
  petal.style.opacity = (0.55 + Math.random() * 0.45).toFixed(2);
  petal.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  petal.style.animationDuration = (5 + Math.random() * 6) + "s";
  petalsLayer.appendChild(petal);
  window.setTimeout(() => petal.remove(), 11500);
}
function flowerRain(amount = 28) {
  for (let i = 0; i < amount; i++) window.setTimeout(makePetal, i * 95);
}
giftButton.addEventListener("click", () => {
  message.hidden = false;
  giftButton.textContent = "💖 ¡Este regalo es para ustedes! 💖";
  giftButton.disabled = true;
  giftButton.style.opacity = "0.9";
  flowerRain(55);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
morePetalsButton.addEventListener("click", () => flowerRain(40));
for (let i = 0; i < 10; i++) window.setTimeout(makePetal, i * 450);
window.setInterval(makePetal, 850);
