const url = "https://jsonplaceholder.typicode.com";

const headers = { "Content-Type": "application/json" };

const id = 11;

// READ - GET
fetch(`${url}/posts/11`, { method: "GET", headers })
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);


// CREATE - POST
fetch(`${url}/posts`, {
  method: "POST",
  headers,
  body: JSON.stringify({ title: "Hobbit", author: "Tolkien", isRead: false })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);


// UPDATE - PUT / PATCH
fetch(`${url}/posts/${id}`, {
  // method: "PUT",
  method: "PATCH",
  headers,
  body: JSON.stringify({ title: "Hagrid", author: "Tolkien", isRead: true })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);


// DELETE
fetch(`${url}/posts/${id}`, {
  method: "DELETE",
  headers,
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
