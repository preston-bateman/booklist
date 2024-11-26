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

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return{...book, title: newTitle}
      }

      return book
    })

    setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
