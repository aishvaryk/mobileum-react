const {sequelize} = require('../data/connection');
const {Sequelize}=require('sequelize');

const Op = Sequelize.Op;

const {Book,Author} =sequelize.models;


const getAllAuthors=async()=>{

    const authors=await Author.findAll();

    return authors;

}

const getAuthorById=async(id)=>{
    
    const author= await Author.findOne({where:{id:id}});
    if(author)
        return author;
    else
        throw new Error('Author Not Found');
}

const updateAuthorById=async(newData, id)=>{
    
    const author= await Author.update(newData, {where:{id:id}});
    if(author)
        return author;
    else
        throw new Error('Author Not Found');
}

const deleteAuthorById=async(id)=>{
    
    const author= await Author.destroy({where:{id:id}});
    if(author)
        return author;
    else
        throw new Error('Author Not Found');
}

const addAuthor=async(author)=>{

    //const dbBook=new Book(book);
    //await dbBook.save(); //this will save the book in the database    
    const dbauthor=await Author.create(author); //create and save to data base
    return dbauthor;
}

const getBooksByAuthor = async(id) => {
    const author = await Author.findOne({where: {id:id}})
    const books = await Book.findAll({
        where: {
            author: author.name
        }
    })

    if(books)
        return books;
    else
        throw new Error('No Book Found by this Author');

}


module.exports={
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById,
    addAuthor,
    getBooksByAuthor,
    
}