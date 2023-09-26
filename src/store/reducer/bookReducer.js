const initState = {
    bookList: [
        {
            id: 1,
            title: "Title One",
            author: "Author One",
            price: 1000
        },
        {
            id: 2,
            title: "Title Two",
            author: "Author Two",
            price: 2000
        },
        {
            id: 3,
            title: "Title Three",
            author: "Author Three",
            price: 1500
        }
    ]
}

const bookReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            return {
                ...state,
                bookList: [...state.bookList, payload] 
            }
        case "DEL":
            return {
                ...state,
                bookList: state.bookList.filter(book => book.id !== payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default bookReducer;