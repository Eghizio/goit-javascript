// Database
const booksDatabase = [
  { name: "A", author: "Adam" },
  { name: "Aa", author: "Adam" },
  { name: "Aaa", author: "Adam" },
  { name: "B", author: "Beth" },
  { name: "Bb", author: "Beth" },
  { name: "Bbb", author: "Beth" },
  { name: "C", author: "Cecil" },
  { name: "Cc", author: "Cecil" },
  { name: "Ccc", author: "Cecil" },
];

// Server function
const getBookByAuthorFromDatabase = (author) => {
  return booksDatabase.filter(book => book.author === author);
};



// // Client code
// const getAuthorBooksFromServer = (author, onSuccess, onFailure) => {
//   console.log("Requesting books...");

//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       const result = getBookByAuthorFromDatabase(author);

//       onSuccess(result);
//     } else {
//       onFailure("Failed to get books!");
//     }

//   }, 3000);
// };

// const result = getAuthorBooksFromServer(
//   "Adam",
//   (books) => console.log(books),
//   (failureMessage) => console.error(failureMessage)
// );
// console.log(result); // undefined


const getAuthorBooksFromServer = (author) => {
  return new Promise((onSuccess, onFailure) => {
    console.log("Requesting books...");

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        const result = getBookByAuthorFromDatabase(author);

        onSuccess(result);
      } else {
        onFailure("Failed to get books!");
      }

    }, 3000);
  });
};

const result = getAuthorBooksFromServer("Adam")
  .then(books => console.log(books))
  .catch(failureMessage => console.error(failureMessage));

console.log(result); // Promise



// Async/Await foreshadowing
const someAsyncFunc = async () => {
  const result = await getAuthorBooksFromServer("Beth");
  console.log("Result from async fn:", result);

  return result;
};

someAsyncFunc().then(books => {
  // do something more with the books :D
});
