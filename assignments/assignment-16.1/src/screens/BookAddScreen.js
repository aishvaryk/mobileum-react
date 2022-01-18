import React,{useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';

const BookAddScreen = ({ onBookSave }) => {

    const [book,updateBook]=useState({
        isbn:'',
        title:'',
        author:'',
        cover:'',
        tags:[],
        description:'Book description',
        price:100,
        rating:3.4,
        votes:1
    });

    const handleBookUpdate=(id, value)=>{
        let updatedBook={...book};
        updatedBook[id]=value;
        updateBook(updatedBook);
        
    }

    const saveBook=(e)=>{
        e.preventDefault();//don't submit this form to server. Its a React from

        //console.log('book',book);
        onBookSave(book);

    }


    //let date=new Date();
    return (

        <div className='row'>
            <div className="col col-6">

                <form onSubmit={saveBook}>
                    <LabeledInput onChange={handleBookUpdate} id="isbn" label="ISBN" value={book.isbn}/>
                    <LabeledInput onChange={handleBookUpdate} id="title" label="TITLE" value={book.title}/>
                    <LabeledInput onChange={handleBookUpdate} id="author" label="AUTHOR" value={book.author}/>
                    <LabeledInput onChange={handleBookUpdate} id="cover" label="COVER" value={book.cover}/>
                    <LabeledInput onChange={handleBookUpdate} id="price" label="PRICE" value={book.price}/>
                    <LabeledInput onChange={handleBookUpdate} id="rating" label="RATING" value={book.rating}/>
                    <LabeledInput onChange={handleBookUpdate} id="description" label="DESCRIPTION" value={book.description}/>
                    <LabeledInput onChange={handleBookUpdate} id="tags" label="TAGS" value={book.tags}/>
                    <LabeledInput onChange={handleBookUpdate} id="votes" label="VOTES" value={book.votes}/>
                    <button type="submit" className="btn btn-primary">Add Book</button>
                </form>



            </div>
        </div>

    );
}
//export default BookListScreen; 
export default
    withVisibility(
        withTitle(BookAddScreen, "Add New Book")
    );


