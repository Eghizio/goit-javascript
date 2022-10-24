const heading = document.querySelector("h1");

console.log(heading.textContent);

heading.classList.add("pink");
heading.classList.remove("pink");

heading.classList.toggle("pink");
heading.classList.toggle("pink");


// Toggle saves us from this shi...
// if (heading.classList.contains("pink")) {
//   heading.classList.remove("pink")
// } else {
//   heading.classList.add("pink");
// }

const btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
  const list = document.querySelector("ol");
  list.classList.toggle("hidden");
  const text = list.classList.contains("hidden") ? "Show List" : "Hide List";

  // event.target <=> btn
  event.target.textContent = text;
  event.target.style.color = Math.random() > 0.5 ? "red" : "green";
});




const messageInput = document.querySelector("input#message");
messageInput.addEventListener("input", (event) => {
  const input = event.target;
  const currentMessage = input.value;
  const maxLength = input.getAttribute("maxlength");

  if (currentMessage.length === parseInt(maxLength, 10)) {
    console.log("Max length reached.");
  }
});

document.querySelector("button#btn-msg").addEventListener("click", () => {
  // const maxLength = parseInt(messageInput.getAttribute("maxlength"), 10);
  // const newLimit = maxLength + 5;
  // console.log("Purchased 5 more characters. Fee 5$ :)");
  // messageInput.setAttribute("maxlength", newLimit);

  console.log("Purchased premium pack for 50$. Removing limits!");
  messageInput.removeAttribute("maxlength");
});




