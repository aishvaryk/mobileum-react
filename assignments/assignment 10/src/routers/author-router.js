const express= require('express');

const {
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById,
    addAuthor,
    getBooksByAuthor,
} = require("./../controllers/authors-controller")


module.exports=()=>{

    const router=express.Router();

    router
        .route("/")
        .get(getAllAuthors)
        .post(addAuthor);

    
    router
        .route("/:id")
        .get(getAuthorById)
        .put(updateAuthorById)
        .delete(deleteAuthorById);
        
    router
        .route("/:id/Books")
        .get(getBooksByAuthor)


    return router;

};

