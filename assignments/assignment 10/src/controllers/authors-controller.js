const service=require('../services/author-service');

const getAllAuthors=async (request,response)=>{
    try{
        const authors=await service.getAllAuthors();
        response.json(authors);
    }catch(error){
        response.status(400).json(error.message);
    }
};

const getAuthorById=async(request,response)=>{
    try{
        const author=await service.getAuthorById(request.params.id);
        response.json(author);
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const updateAuthorById=async(request,response)=>{
    try{
        const author=await service.updateAuthorById(request.body,request.params.id);
        response.send(`${author} Author with ISBN ${request.params.id} Updated`);
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.id});
    }
}

const deleteAuthorById=async(request,response)=>{
    try{
        const author=await service.deleteAuthorById(request.params.id);
        response.send(`${author} Author with ISBN ${request.params.id} deleted`);
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.id});
    }
}

const addAuthor=async (request, response, next) => {
    try{
        const author=await service.addAuthor(request.body);
        response.status(201).send(author);
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const getBooksByAuthor = async (request, response) => {
    try {
        const books = await service.getBooksByAuthor(request.params.id)
        response.status(201).send(books);
        
    } catch (error) {
        response.status(400).json({message: error.message});
    }
}


module.exports={
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById,
    addAuthor,
    getBooksByAuthor,
}