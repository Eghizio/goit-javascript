const getRandomColor = () => `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;

const getRandomHex = () => Math.round(Math.random() * 256).toString(16).padStart(2, "0");

const createBox = () => {
  const box = document.createElement("button");
  box.classList.add("box");

  const hexColor = getRandomColor();
  box.dataset.hexColor = hexColor;
  box.style.backgroundColor = hexColor;

  return box;
};

const boxes = Array.from({ length: 1024 }, createBox);

const fragment = document.createDocumentFragment();
fragment.append(...boxes);

const colorsContainer = document.querySelector("div.colors");
colorsContainer.appendChild(fragment);



const selectColor = (event) => {
  const clickedElement = event.target;
  if (!clickedElement.classList.contains("box")) return;

  const color = clickedElement.dataset.hexColor;

  selectedColor.textContent = color;
  selectedColor.style.color = color;
};

const selectedContainer = document.querySelector("div#selected-color");
const selectedColor = selectedContainer.querySelector("span");

colorsContainer.addEventListener("click", selectColor);

colorsContainer.addEventListener("mouseover", selectColor);



const hexes = boxes.map(box => box.dataset.hexColor);
console.log(new Set(hexes).size);
