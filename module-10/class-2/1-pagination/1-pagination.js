// const url = "https://jsonplaceholder.typicode.com/posts";
const url = "https://jsonplaceholder.typicode.com/posts?_limit=42";

// fetch(url)
//   .then(res => res.json())
//   .then(console.log);


const createPost = ({ title, body, id, userId }) => {
  const container = document.createElement("article");
  const h3 = document.createElement("h3");
  h3.textContent = title;

  const postInfo = document.createElement("p");
  postInfo.textContent = `Post #${id} by User-${userId}`;

  const p = document.createElement("p");
  p.textContent = body;

  container.append(h3);
  container.append(postInfo);
  container.append(p);
  return container;
};

const renderPosts = (postsData = []) => {
  const postsList = document.querySelector("#posts");
  const fragment = document.createDocumentFragment();

  const posts = postsData.map(createPost);
  fragment.append(...posts);

  postsList.append(fragment);
};

// const getPosts = (page = 1, amount = 5) => {
//   const url = `https://jsonplaceholder.typicode.com/posts?_limit=${amount}&_page=${page}`;
//   return fetch(url)
//     .then(res => res.json());
// };

const createPostPagination = (initialPage = 1, amount = 5) => {
  let page = initialPage;

  return () => {
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=${amount}&_page=${page}`;
    page++;
    return fetch(url)
      .then(res => res.json());
  };
};

const getPostsPage = createPostPagination(1, 5);

const loadBtn = document.querySelector("button#load");
loadBtn.addEventListener("click", () => {
  // getPosts(2, 10)
  getPostsPage()
    // .then(console.log)
    .then(renderPosts)
    .catch(console.error);
});




