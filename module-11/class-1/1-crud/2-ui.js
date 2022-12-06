
const createBookElement = ({ id, title, author, isRead }) => {
  const bookElement = document.createElement("article");
  const btnLabel = isRead ? "Is read" : "Is not read";
  const template = `
    <h2>${title}</h2>
    <span>${author}</span>
    <button data-id="${id}" data-type="update">${btnLabel}</button>
    <button data-id="${id}" data-type="delete">Delete</button>
  `;

  bookElement.id = id;
  bookElement.innerHTML = template.trim();

  return bookElement;
};

const bookList = document.querySelector("ul#book-list");
const renderBookList = async () => {
  [...bookList.children].forEach(child => child.remove());

  // Read
  const books = (await Books.getAllBooks()).map(createBookElement);
  const fragment = document.createDocumentFragment();
  fragment.append(...books);

  bookList.append(fragment);
};

const form = document.querySelector("form#book-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = document.querySelector("input#title-input").value;
  const author = document.querySelector("input#author-input").value;
  // Create
  await Books.createBook({ title, author });

  renderBookList();
});

bookList.addEventListener("click", async (event) => {
  const { nodeName, dataset: { type, id } } = event.target;
  if (nodeName !== "BUTTON") return;

  // Update
  if (type === "update") await Books.updateBook(id);
  // Delete
  if (type === "delete") await Books.deleteBook(id);

  renderBookList();
});

renderBookList();
