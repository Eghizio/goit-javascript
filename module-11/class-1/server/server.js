import express from "express";
import cors from "cors";

const booksCollection = new Map();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/books", (req, res) => res.json({ books: [...booksCollection.values()] }));

app.get("/api/books/:id", (req, res) => {
  const id = req.params.id;

  if (!booksCollection.has(id)) {
    return res.sendStatus(404);
  }

  const book = booksCollection.get(id);
  return res.json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author, id, isRead } = req.body;
  const book = { id: id.toString(), title, author, isRead };

  if (booksCollection.has(book.id)) {
    return res.sendStatus(400);
  }

  booksCollection.set(book.id, book);
  return res.status(201).json(book);
});

app.patch("/api/books/:id", (req, res) => {
  const id = req.params.id;

  if (!booksCollection.has(id)) {
    return res.sendStatus(400);
  }

  const book = booksCollection.get(id);
  const updatedBook = { ...book, isRead: !book.isRead };
  booksCollection.set(id, updatedBook);
  return res.json(updatedBook);
});

app.delete("/api/books/:id", (req, res) => {
  const id = req.params.id;

  if (!booksCollection.has(id)) {
    return res.sendStatus(400);
  }

  booksCollection.delete(id);
  return res.json({ id });
});

app.listen(3001, () => console.log(`Server running on port 3001...`));