const service=require('../services/books-service');

const getAllBooks=async (request,response)=>{
    try{
        const books=await service.getAllBooks();
        response.json(books);
    }catch(error){
        response.status(400).json(error.message);
    }
};

const getBookByIsbn=async(request,response)=>{
    try{
        const book=await service.getBookByIsbn(request.params.isbn);
        response.json(book);
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.isbn});
    }
}

const updateBookByIsbn=async(request,response)=>{
    try{
        const book=await service.updateBookByIsbn(request.body,request.params.isbn);
        response.send(`${book} Book with ISBN ${request.params.isbn} Updated`);
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.isbn});
    }
}

const deleteBookByIsbn=async(request,response)=>{
    try{
        const book=await service.deleteBookByIsbn(request.params.isbn);
        response.send(`${book} Book with ISBN ${request.params.isbn} deleted`);
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.isbn});
    }
}

const addBook=async (request, response, next) => {
    try{
        const book=await service.addBook(request.body);
        response.status(201).send(book);
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const getBookByPrice = async (request, response) => {
    try {
        const books = await service.getBookByPrice(parseInt(request.params.min) , parseInt(request.params.max))
        response.status(201).send(books);
        
    } catch (error) {
        response.status(400).json({message: error.message});
    }
}

const getBookByRating = async (request, response) => {
    try {
        const books = await service.getBookByRating(parseFloat(request.params.min) , parseFloat(request.params.max))
        response.status(201).send(books);
        
    } catch (error) {
        response.status(400).json({message: error.message});
    }
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    deleteBookByIsbn,
    updateBookByIsbn,
    addBook,
    getBookByPrice,
    getBookByRating
}