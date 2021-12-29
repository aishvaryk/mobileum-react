var Book = function (title, author, price, rating) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.rating = rating;
};

book01 = new Book("Zero to One", "Blake Masters and Peter Thiel", 100, 8);
book02 = new Book("Range", "David Epstein", 120, 10);
book03 = new Book("Moral Landscape", "Sam Harris", 140, 9);
book04 = new Book("Sapiens", "Yuval Noah Harari", 130, 7);
book05 = new Book("21 Lessons for the 21st Century", "Yuval Noah Harari", 140, 6);


var bookManager = {
    bookList: [book01, book02, book03, book04, book05],
    addBook: function (...books) {
        for (let book of books) {
            bookList.push(book);
        }
    },
    getAllBooks: function () {
        return this.bookList;
    },
    getBooksByAuthor: function (author) {
        returnList = []
        for (let book of this.bookList) {
            if (book.author.includes(author)) {
                returnList.push(book);
            }
        }
        return returnList;
    },

    getBooksInPriceRange: function (minPrice, maxPrice) {
        returnList = []
        for (let book of this.bookList) {
            if (book.price >= minPrice && book.price <= maxPrice) {
                returnList.push(book);
            }
        }
        return returnList;
    },
    getBooksWithRatingabove : function (rating) {
        returnList = []
        for (let book of this.bookList) {
            if (book.rating>=rating) {
                returnList.push(book);
            }
        }
        return returnList;
    }
};

console.log(bookManager.bookList);
console.log(bookManager.getBooksByAuthor("Yuval"))