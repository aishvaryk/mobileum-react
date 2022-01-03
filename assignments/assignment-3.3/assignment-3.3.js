const bookCollection = require('./books5.json'); 

for (var book of bookCollection){ 
    console.log(book);
    document.getElementById("authors").innnerHTML += 
    `<option value="${book.author}">
        ${book.author}
    </option>
    `;
}