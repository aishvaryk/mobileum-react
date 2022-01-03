document.body.onload = function () {
  let bookToEdit = localStorage.getItem("bookToEdit");
  console.log(bookToEdit)
  let books = JSON.parse(localStorage.getItem("books"));
    for (let book of books) {
      if (book.isbn == bookToEdit) {
        var bookToFill = book;
        break;
      }
    }

  document.getElementById("isbn").value = bookToFill.isbn;
  document.getElementById("title").value = bookToFill.title;
  document.getElementById("author").value = bookToFill.author;
  document.getElementById("cover").value = bookToFill.cover;
  document.getElementById("price").value = bookToFill.price;
  document.getElementById("rating").value = bookToFill.rating;
  console.log("run");
};

const BookFormPage = {
  getInputBook: function () {
    let isbn = document.getElementById("isbn").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let cover = document.getElementById("cover").value;
    let rating = document.getElementById("rating").value;
    let price = document.getElementById("price").value;
    var book = new Book({ isbn, title, author, cover, rating, price });
    return book;
  },

  addBook: function () {
    let book = this.getInputBook();
    let books = JSON.parse(localStorage.getItem("books"));
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  },
  editBook: function () {
    let book = this.getInputBook();
    let books = JSON.parse(localStorage.getItem("books"));
    let bookToEdit = localStorage.getItem("bookToEdit");
    for (let i = 0; i < books.length; i++) {
      if (books[i].isbn == bookToEdit) {
        books[i] = book;
        break;
      }
    }
    localStorage.setItem("books", JSON.stringify(books));
  },
};
