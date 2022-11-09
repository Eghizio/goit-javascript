const NOTES_KEY = "notes";

const getNotes = () => {
  const defaultValue = [];

  try {
    const notes = JSON.parse(localStorage.getItem(NOTES_KEY));
    if (notes) {
      return notes;
    }

    localStorage.setItem(NOTES_KEY, JSON.stringify(defaultValue));
    return defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

const addNote = (note) => {
  const notes = getNotes();
  notes.push(note);

  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

const removeNote = (note) => {
  const notes = getNotes();
  const updatedNotes = notes.filter(n => n !== note);

  localStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes));
};



const btnAdd = document.querySelector("button#add-note");
btnAdd.addEventListener("click", () => {
  const input = document.querySelector("input#note");
  const note = input.value;

  if (note.trim()) {
    addNote(note);
    renderNotes();
  }

  input.value = "";
});

const btnGet = document.querySelector("button#get-note");
btnGet.addEventListener("click", () => console.log(getNotes()));



const notesList = document.querySelector("ul#notes-list");
notesList.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const isDeleteBtn = clickedElement.nodeName === "BUTTON" && clickedElement.classList.contains("danger");
  if (!isDeleteBtn) return;

  const noteElement = clickedElement.parentElement.firstChild;
  const note = noteElement.textContent;

  removeNote(note);
  renderNotes();
});



const createNoteElement = (note) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = note;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("danger")
  deleteBtn.textContent = "X";

  li.append(span);
  li.append(deleteBtn);

  return li;
};

const destroyChildren = (parent) => {
  while (parent.children.length !== 0) {
    parent.firstChild.remove();
  }
};

const renderNotes = () => {
  const notes = getNotes();
  const listItems = notes.map(createNoteElement);

  const fragment = document.createDocumentFragment();
  fragment.append(...listItems);

  destroyChildren(notesList);
  notesList.appendChild(fragment);
};

const btnRefresh = document.querySelector("button#refresh-notes");
btnRefresh.addEventListener("click", renderNotes);

renderNotes();
