const message = "Hello there";

const template = `<span class="pink">${message}</span>`;
// document.body.innerHTML = template;

const paragraph = document.createElement("p");
paragraph.textContent = message;
paragraph.style.color = "green";

document.body.insertAdjacentElement("beforeend", paragraph);
document.body.insertAdjacentElement("beforebegin", paragraph);

