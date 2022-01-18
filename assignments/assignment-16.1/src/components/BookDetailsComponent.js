import React,{useState,useEffect} from 'react';

const BookDetailsComponent = ({ book }) => {

    const [title,setTitle]= useState("Book Details");

    useEffect(()=>{
        console.log('book details is updated');
        setTimeout(()=>{
            setTitle(book.title);
        },5000);

        return ()=>{
            setTitle("Loading...");
            console.log('removing book ',book.title);
        }

    },[book.isbn]);

    console.log('book details is rendering');


    return (
        <div className='BookDetailsScreen'>
            <h1>{title}</h1>
            <h2>by {book.author}</h2>
            <div className='row'>
                <div className='col col-7'>
                    <h3>Meta</h3>
                    <ul>
                        <li>ISBN: {book.isbn}</li>
                        <li>Price: {book.price}</li>
                        <li>Rating: {book.rating} / 5 ({book.votes}votes)</li>
                    </ul>
                    {book.tags.map((tag,i) => <span key={i} className='badge badge-secondary'>{tag}</span>)}
                    <h3>Details</h3>
                    <p>{book.description}</p>
                </div>
                <div className='col col-5'>
                    <img src={book.cover} alt={book.title} />
                </div>

            </div>
        </div>
    );
}

export default BookDetailsComponent;