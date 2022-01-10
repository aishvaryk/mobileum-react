const {sequelize} = require('../data/connection');
const {Sequelize}=require('sequelize');

//console.log('sequelize.models',sequelize.models);
const Op = Sequelize.Op;

const {Book} =sequelize.models;


//console.log('db',db);
const getAllBooks=async()=>{

    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Book.findAll();

    return books;

}

const getBookByIsbn=async(isbn)=>{
    
    const book= await Book.findOne({where:{isbn:isbn}});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const updateBookByIsbn=async(newData, isbn)=>{
    
    const book= await Book.update(newData, {where:{isbn:isbn}});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const deleteBookByIsbn=async(isbn)=>{
    
    const book= await Book.destroy({where:{isbn:isbn}});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const addBook=async(book)=>{

    //const dbBook=new Book(book);
    //await dbBook.save(); //this will save the book in the database    
    const dbBook=await Book.create(book); //create and save to data base
    return dbBook;
}

const getBookByPrice = async(min, max) => {
    const books = await Book.findAll({
        where: {
            price:{
                [Op.between]: [min, max]
            }
        }
    })

    if(books)
        return books;
    else
        throw new Error('Book Not Found');

}

const getBookByRating = async(min, max) => {
    const books = await Book.findAll({
        where: {
            rating:{
                [Op.between]: [min, max]
            }
        }
    })

    if(books)
        return books;
    else
        throw new Error('Book Not Found');

}

module.exports={
    getAllBooks,
    getBookByIsbn,
    deleteBookByIsbn,
    updateBookByIsbn,
    addBook,
    getBookByPrice,
    getBookByRating,
    
}