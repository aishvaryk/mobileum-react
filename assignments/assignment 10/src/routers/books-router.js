const express= require('express');
const {addBook,getAllBooks,getBookByIsbn,getBookByPrice, getBookByRating, deleteBookByIsbn, updateBookByIsbn} =require('../controllers/books-controller');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(getAllBooks)
        .post(addBook);

    
    router
        .route("/:isbn")
        .get(getBookByIsbn)
        .put(updateBookByIsbn)
        .delete(deleteBookByIsbn)
        
        ;

    router
        .route("/pricerange/:min/:max")
        .get(getBookByPrice)

    router
        .route("/ratingrange/:min/:max")
        .get(getBookByRating)
        
    return router;

};

