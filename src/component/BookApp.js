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
            <table>
                {books.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.author}</td>
                            <td>{val.price}</td>
                            <td>
                                <button onClick={() => dispatch(deleteBook(val.id))}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default BookApp;