const rollDice = () => Math.ceil(Math.random() * 5) + 1;


const diceBtn = document.querySelector(".dice>button");
const diceResult = document.querySelector(".dice>.dice-result");

diceBtn.addEventListener("click", () => {
  diceResult.textContent = rollDice();
});

