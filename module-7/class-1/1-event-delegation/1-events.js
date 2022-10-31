const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

const alertElement = (name) => (event) => {
  const elementText = event.currentTarget.textContent;
  console.log(`[${name}]: ${elementText} click handler`);
};

parent.addEventListener("click", alertElement("Parent"));
// child.addEventListener("click", alertElement("Child"));
descendant.addEventListener("click", alertElement("Descendant"));

child.addEventListener("click", (event) => {
  event.stopPropagation();
  const elementText = event.target.textContent;
  console.log(`[Child]: ${elementText} click handler`);
});

