
exports.module.Author = Author = function (name, photo, biography) {
    this.name = name;
    this.photo = photo;
    this.biography = biography;
}



//constructor
function AuthorManager(){
    this.db=[];
};

//other methods
AuthorManager.prototype.addAuthors=function(...authors){
    this.db=[...this.db,...authors];
}

//other methods
AuthorManager.prototype.getAllAuthors=function(){
    return this.db;
}

AuthorManager.prototype.printAuthors=function(header=''){
    console.log(header);
    this.db.forEach(console.log);
}
