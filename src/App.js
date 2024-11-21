import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([])

  const createBook = () => {

  }

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate  />
    </div>
  );
}

export default App;
