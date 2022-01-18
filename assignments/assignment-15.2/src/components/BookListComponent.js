import React from 'react';

const BookListComponent=(props)=>{
    //TODO: Initialize Here
  

    return (
        <div className='BookListScreen'>
            

            <div className="list-group">
                {props.books.map(book=>(
                    
                    <button key={book.isbn} 
                    className={book.isbn!==props.activeBook.isbn ? 'list-group-item list-group-item-action': 'list-group-item list-group-item-action active'}
                    onClick={props.onBookClick}
                    >
                        {book.title}
                        
                    </button>
                ))}
            </div>

        </div>
    );
}

export default BookListComponent;


