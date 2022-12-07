const url = "http://localhost:3001/api/books";

const getAllBooksSync = () => [
  { title: "First" },
  { title: "Second" },
  { title: "Third" },
];

const getAllBooksAsync = () => fetch(url).then(res => res.json()).catch(console.error);

const displayBooks = (getter) => async () => {
  const books = await getter(); // .then(books => console.log(books));
  console.log(books);
};

const syncBtn = document.querySelector("button#sync");
syncBtn.addEventListener("click", displayBooks(getAllBooksSync));

const asyncBtn = document.querySelector("button#async");
asyncBtn.addEventListener("click", displayBooks(getAllBooksAsync));


const getSecondBook = () => {
  console.log("Fetching all books...")
  return fetch(url)
    .then(res => res.json())
    .then(data => data.books)
    .then(books => {
      console.log("Fetching second book...");
      const secondBookId = books[1].id;
      return fetch(`${url}/${secondBookId}`).then(res => res.json());
    });
};


// const getSomePostFromComment = (commentIndex) => {
//   return fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(res => res.json())
//     .then(coms => {
//       const postId = coms[commentIndex].postId;

//       return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         .then(res => res.json());
//     })
// };


async function someAsyncFunc() { }

// const getSomePostFromComment = async (commentIndex) => {
//   const comments = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json());
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${comments[commentIndex].postId}`)
//     .then(res => res.json());

//   // const post = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
//   // // const post = await postResponse.json();
//   // return post;
// };

const getSomePostFromComment = async (commentIndex) => {
  const commentResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await commentResponse.json();
  const postId = comments[commentIndex].postId;

  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());

  // const post = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
  // // const post = await postResponse.json();
  // return post;
};

const bookBtn = document.querySelector("button#book");
bookBtn.addEventListener("click", displayBooks(getSecondBook));

const postBtn = document.querySelector("button#post");
postBtn.addEventListener("click", async () => {
  const commentIndex = document.querySelector("input").value;
  const post = await getSomePostFromComment(commentIndex); // .then(post => console.log(post));
  console.log(post);
});


// Async error handling
const getPostWithErrorHandling = async (commentIndex) => {
  try {
    // const commentResponse = await fetch("https://abcdeee.typicode.com/comments");
    const commentResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await commentResponse.json();

    const postId = comments[commentIndex].postId;

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResponse.json();

    return post;
  } catch (error) {
    console.log("There was an error. Ooopsie", error);
    alert(error.message)
    return { message: "No posts" }
  }
};

const postErrorBtn = document.querySelector("button#post-error");
postErrorBtn.addEventListener("click", async () => {
  const commentIndex = document.querySelector("input").value;
  const post = await getPostWithErrorHandling(commentIndex);
  console.log(post);
});


// Request parallelization
const independentRequests = async () => {
  const post = await getSomePostFromComment(1);
  const anotherPost = await getPostWithErrorHandling(2);
  const book = await getSecondBook();
  console.log("Finished");
}

const independentRequestsParallel = async () => {
  const data = Promise.all([getSomePostFromComment(1), getPostWithErrorHandling(2), getSecondBook()]);
  console.log("Finished");
};

const btnAll = document.querySelector("button#all");
btnAll.addEventListener("click", independentRequests);
// btnAll.addEventListener("click", independentRequestsParallel);
