import React from "react";
import { connect } from "react-redux";
import { addBook, deleteBook } from "../store/action/BookAction";

const BookApp = ({ books, addBook, deleteBook }) => {

    const addNewBook = () => {
        const book = {
            id: 4,
            title: "Title Four",
            author: "Author Four",
            price: 2500
        }
        addBook(book)
    }

    return (
        <div>
            <h1>Book App</h1>
            {books.map(book =>
                <div key={book.id}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.price}</p>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    books: state.bookReducer.bookList
}

export default connect(mapStateToProps, { addBook, deleteBook })(BookApp);