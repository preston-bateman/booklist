import { useState, useContext } from "react"
import BooksContext from "../context/books"

function BookCreate () {
    const [title, setTitle] = useState('')
    const { createBook } = useContext(BooksContext)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createBook(title)
        setTitle('')
    }

    return(
        <div className="book-create">
            <h3>Add A Book</h3>
            <form  onSubmit={handleSubmit}>
                <label>Title:</label>
                <input className="input" onChange={handleChange} value={title}  />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}

export default BookCreate