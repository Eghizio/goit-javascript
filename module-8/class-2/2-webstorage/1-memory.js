const notes = [];

const btnAdd = document.querySelector("button#add-note");
btnAdd.addEventListener("click", () => {
  const input = document.querySelector("input#note");
  const note = input.value;
  if (note.trim()) notes.push(note);
  input.value = "";
});


const printNotes = () => {
  console.log(notes);
};

const btnGet = document.querySelector("button#get-note");
btnGet.addEventListener("click", printNotes);
