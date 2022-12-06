const Books = {

  // Create
  createBook: ({ title, author }) => fetch("http://localhost:3001/api/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      author,
      isRead: false,
      id: title + "_" + author,
    })
  })
    .then(res => res.json())
    .catch(console.error),

  // Read
  getAllBooks: () => fetch("http://localhost:3001/api/books")
    .then(res => res.json())
    .then(data => data.books)
    .catch(console.error),

  getBookById: (id) => fetch(`http://localhost:3001/api/books/${id}`)
    .then(res => res.json())
    .catch(console.error),

  // Update
  updateBook: (id) => fetch(`http://localhost:3001/api/books/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  })
    .then(res => res.json())
    .catch(console.error),

  // Delete
  deleteBook: (id) => fetch(`http://localhost:3001/api/books/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then(res => res.json())
    .catch(console.error),
};