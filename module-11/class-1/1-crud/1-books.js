const Books = {
  booksCollection: new Map(),

  // Create
  createBook: function ({ title, author }) {
    const id = title + "_" + author; // Not quite unique ID
    const book = { id, title, author, isRead: false };

    if (this.booksCollection.has(id)) {
      return alert("Book already in collection.");
    }

    this.booksCollection.set(id, book);
  },

  // Read
  getAllBooks: function () { return [...this.booksCollection.values()] },

  // Update
  updateBook: function (id) {
    const book = this.booksCollection.get(id);
    const updatedBook = { ...book, isRead: !book.isRead };
    this.booksCollection.set(id, updatedBook);
  },

  // Delete
  deleteBook: function (id) { this.booksCollection.delete(id) }
};