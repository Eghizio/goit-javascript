

const ol = document.querySelector("ol");
// const firstListItem = document.querySelector("li");
const firstListItem = document.querySelector("ol > li");

// console.log(firstListItem);

const listItems = ol.querySelectorAll("li");

console.log(listItems);
listItems.forEach(element => {
  console.log(element.textContent)
  // element.textContent = "Trolololo";
});


const makeElementBigRed = (element) => {
  element.style.color = "red";
  element.style.fontSize = "32px";
};

const secondElement = document.querySelector("#two");
console.log(secondElement);
makeElementBigRed(secondElement);
const secondElementById = document.getElementById("two");
console.log(secondElementById);

makeElementBigRed(document.querySelector("li.four"));
