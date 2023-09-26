import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "../store/action/BookAction";

const BookApp = () => {

    const books = useSelector(state => state.bookReducer.bookList);
    const dispatch = useDispatch();
    const addNewBook = () => {
        const book = {
            id: 4,
            title: "Title Four",
            author: "Author Four",
            price: 2500
        }
        dispatch(addBook(book))
    }

    return (
        <div>
            <h1>Book App</h1>
            <button onClick={addNewBook}>
                Add
            </button>
            {books.map(book =>
                <div key={book.id}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.price}</p>
                    <button onClick={() => dispatch(deleteBook(book.id))}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default BookApp;