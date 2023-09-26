export const addBook = data => {
    return({
        type: "ADD",
        payload: data
    })
}

export const deleteBook = data => {
    return({
        type: "DEL",
        payload: data
    })
}