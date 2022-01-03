const BookManager=function(){

    this.db=[];

    this.updateDB = function() {
        console.log(this.db);
        console.log(JSON.parse(localStorage.getItem('books')))
        this.db = JSON.parse(localStorage.getItem('books'));
        console.log(this.db);
    }
    this.addBook=function(book){
        this.db[this.db.length]=book;
    }

    this.addBooks=function(...books){
        this.db=[...this.db,...books];
    }

    this.getAllBooks=function(){
        return this.db;
    }

    this.getBooksByAuthor=function(author){
        author=author.toLowerCase();        
       return this.db.search(b=>b.author.toLowerCase().includes(author));
    }


    this.getBooksInPriceRange=function(min,max){

        return this.db.search( b=>b.price>=min && b.price<=max);
    }

    this.getBooksByRating=function(minRating){
        return this.db.search(b=>b.rating>=minRating);
    }

    this.getBookByIsbn=function(isbn){
        return this.db.find(b=>b.isbn===isbn);
    }

    this.getBooksByTitle=function(title){
        title=title.toLowerCase();
        return this.db.filter( b=> b.title.toLowerCase().includes(title));
    }

    this.removeBook=function(isbn){
        for (let i=0; i<this.db.length; i++) {
            if (this.db[i].isbn===isbn) {
                indexToRemove = i
                break
            }
        }
        this.db.splice(indexToRemove, 1);
        localStorage.setItem('books', JSON.stringify(this.db));
    }

    this.updateBook=function(book){
        //TODO: implement this logic
    }

};
