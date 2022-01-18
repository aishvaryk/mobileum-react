const addBooksLocal = function (books) {
    localStorage.setItem('books', JSON.stringify(books));
}

const addBookLocal = function (book) {
    var books = JSON.parse(localStorage.getItem('books'));
    localStorage.setItem('books', JSON.stringify([...books, book]));
}

const getBooksLocal = function () {
    return JSON.parse(localStorage.getItem('books'));
}

export {addBookLocal, addBooksLocal, getBooksLocal};