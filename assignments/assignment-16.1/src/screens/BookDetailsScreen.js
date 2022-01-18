import React from 'react';
import {Timer} from '../components/Timer';
import withVisibility from '../hoc/with-visibility';
const BookDetailsScreen = ({book }) => {
    //TODO: Initialize Here
  

    return (

        <div>
            <Timer render={now=><h3>{now.toLocaleTimeString()}</h3>} />
            
            <h1>{book.title}</h1>
            <div className='BookDetailsScreen'>
                <h3>by {book.author}</h3>
                <div className='row'>
                    <div className='col col-7'>
                        <h3>Meta</h3>
                        <ul>
                            <li>ISBN: {book.isbn}</li>
                            <li>Price: {book.price}</li>
                            <li>Rating: {book.rating} / 5 ({book.votes}votes)</li>
                        </ul>
                        {book.tags.map(tag => <span key={tag} className='badge badge-secondary'>{tag}</span>)}
                        <h3>Details</h3>
                        <p>{book.description}</p>
                    </div>
                    <div className='col col-5'>
                        <img src={book.cover} alt={book.title} />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default withVisibility(BookDetailsScreen);