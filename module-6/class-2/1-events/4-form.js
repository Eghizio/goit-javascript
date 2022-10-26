const form = document.querySelector("form");

// const handleSubmit = (event) => {
//   event.preventDefault();
// };

// form.addEventListener("submit", handleSubmit);



// Change
const select = form.querySelector("select");

const handleSelectChange = (event) => {
  const messageTarget = form.querySelector("span#message-target");
  messageTarget.textContent = event.target.value;
};
select.addEventListener("change", handleSelectChange);



// Input
const messageInput = form.querySelector("input");

const handleMessageInput = (event) => {
  const preview = document.querySelector("div#preview");
  const friendName = select.value;
  const msg = event.target.value;

  const messageTemplate = `Dear ${friendName}! ${msg}`;
  preview.textContent = messageTemplate;
};

messageInput.addEventListener("input", handleMessageInput);



// Focus & Blur
const handleFocus = () => {
  const typingElem = document.querySelector("span#typing");
  typingElem.textContent = "User is typing...";
};
messageInput.addEventListener("focus", handleFocus);

const handleBlur = () => {
  const typingElem = document.querySelector("span#typing");
  typingElem.textContent = "";
  alert("Have you finished typing your message?");
};
messageInput.addEventListener("blur", handleBlur);


// Currying and function configuration
const sendMessage = (feedback) => (event) => {
  event.preventDefault();
  console.log(feedback);
};

form.addEventListener("submit", sendMessage("Message sent!"));


const notes = document.querySelector("input#notes");

const handleInputLength = (inputLabel) => (event) => {
  // const len = notes.value.length;

  // Reusable and generic
  const len = event.target.value.length;
  console.log(inputLabel, len);
};

notes.addEventListener("input", handleInputLength("Notes"));
messageInput.addEventListener("input", handleInputLength("Message"));