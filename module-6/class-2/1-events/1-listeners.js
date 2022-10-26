const btn = document.querySelector("button");

const diceRoll = () => Math.ceil(Math.random() * 6);

// Event handler
const btnHandler = () => {
  btn.textContent = "I have a purpose!";
  console.log("Clicked");
};

// Adding listener
btn.addEventListener("click", btnHandler);


// Removing listener
setTimeout(() => {
  console.log("REMOVING LISTENER!");
  btn.removeEventListener("click", btnHandler);
  btn.textContent = "I am pointless again :(";
}, 5000);


// "this" in event handlers
const user = {
  textContent: "Darek",
  openDoors: function () {
    console.log(this.textContent);
  }
};

// this === user
user.openDoors();

// this === btn
btn.addEventListener("click", user.openDoors);
