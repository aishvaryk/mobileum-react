import React from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import { withTimer } from '../components/Timer';

const BookListScreen = ({ now,books,onBookSelect }) => {
  //TODO: Initialize Here
 
  //let date=new Date();
  return (

    <div className='BookListScreen'>

      <h3>{now.toLocaleTimeString()}</h3>
      <ul>
        {books.map(book => (
          <li key={book.isbn} onClick={()=>onBookSelect(book)} style={{cursor:'pointer'}}>
            <img src={book.cover} alt={book.title} />
            {book.title}
          </li>
        ))}
      </ul>

    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
    withTimer(
      withTitle(BookListScreen, "Book List Screen")
    )
  );


