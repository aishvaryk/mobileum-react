
class Book {

    constructor(title, author, price, rating) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}   

module.exports.BookManager = class BookManager{

    constructor(){
        this.db=[];
    }

    addBooks(...books){
        this.db=[...this.db,...books];
    }

    getAllBooks(){
        return this.db;
    }

    printBooks(header=''){
        console.log('header');
        this.db.forEach(console.log);
    
    }
};
