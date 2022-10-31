const container = document.querySelector("main#container");

container.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") return;

  console.log(event.target.textContent);
});


const createButton = (text) => {
  const btn = document.createElement("button");
  btn.textContent = text;

  return btn;
};

// const btns = Array.from({ length: 100000 }, (_, i) => createButton(i + 1));

// const fragment = document.createDocumentFragment();
// fragment.append(...btns);

// container.appendChild(fragment);


const modal = document.querySelector("div#modal");
modal.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  modal.style.display = event.target === modal ? "block" : "none";
});
