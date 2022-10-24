const root = document;
const html = root.firstChild;
const body = html.lastChild;
const main = document.body.children[0];
const list = main.lastChild.previousSibling;
const firstItem = list.firstElementChild;

console.log(firstItem.nextElementSibling.textContent);

const orderedList = firstItem.parentNode;

console.log(orderedList);

const listItems = orderedList.children;
const middleElement = listItems[Math.floor(listItems.length / 2)];
console.log(middleElement);

middleElement.style.backgroundColor = "red";
middleElement.style.color = "white";
