// // Async - Timeout
// console.log("Hello");

// setTimeout(() => {
//   // console.log("General Kenobi!");
// });

// console.log("There!");

// // general kenobi



// // Pizza
// console.clear();

// const orderPizza = () => {
//   console.log("Pizza ordered!");

//   const timeoutId = setTimeout(() => {
//     console.log("Pizza delivered!");
//   }, 5000 + Math.random() * 5000);

//   return timeoutId;
// };

// const timeoutId = orderPizza();
// console.log("Playing console while waiting for delicious pizza.");

// console.log("We are broke due to inflation. We need to cancel pizza order!");
// clearTimeout(timeoutId);

// // console.log(timeoutId);



// Interval
console.clear();

const timer = document.querySelector("h1");

let i = 0;
let intervalId = null;

const stopInterval = () => clearInterval(intervalId);

const startInterval = () => {
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    timer.textContent = i;
    console.log("Hi", i++);
  }, 500);
};

const [startBtn, stopBtn] = document.querySelectorAll("button");

startBtn.addEventListener("click", startInterval);
stopBtn.addEventListener("click", stopInterval);

const startTimer = () => {
  const interval = setInterval(() => {
    timer.textContent = i;
    console.log("Hi", i++);
  }, 1000);

  const unsubscribe = () => clearInterval(interval);

  return unsubscribe;
};


const unsub = startTimer();
