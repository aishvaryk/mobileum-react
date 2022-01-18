import React from 'react';

const BookListComponent=({books,book,onSelect})=>{
    //TODO: Initialize Here
  
    const getClasses=( currentBook )=>{
        let defaultClasses='list-group-item list-group-item-action ';
       // console.log(currentBook.isbn,book.isbn, currentBook.isbn===book.isbn);
        if(currentBook.isbn ===book.isbn)
            defaultClasses+="active";

        return defaultClasses;
    }

    return (
        <div className='BookListScreen'>
            

            <div className="list-group">
                {books.map(book=>(
                    
                    <button key={book.isbn} className={getClasses(book)}
                            onClick={()=>onSelect(book)}
                        >
                    
                        {book.title}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default BookListComponent;


