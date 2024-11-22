import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const uniqueId = uuidv4()
    const updateBooks = [
      ...books,
      { id: uniqueId, title }
    ]
    setBooks(updateBooks)
  }

  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updateBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
