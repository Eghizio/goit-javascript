const btn = document.querySelector("button");


const trackUserCursor = (event) => {
  const { clientX, clientY } = event;
  // console.log(event.type);

  const tracking = { x: clientX, y: clientY };

  console.log("Sending to server:", tracking);
}

document.addEventListener("mousemove", trackUserCursor);


btn.addEventListener("click", () => {
  document.removeEventListener("mousemove", trackUserCursor);
  console.clear();
});



// Default behaviour
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  console.log(event.defaultPrevented);
  event.preventDefault();
  console.log(event.defaultPrevented);
});