const BookManager = require('./book ').BookManager;

const bookManager=new BookManager();
const authorManager=new AuthorManager();

bookManager.addBooks(
    new Book('The Accursed God','Vivek Dutta Mishra', 399, 4.1),
    new Book('The Count of Monte Cristo','Alexandre Dumas', 299, 4.5)
);

authorManager.addAuthors(
    new Author('Vivek Dutta Mishra','vivek.jpg','Author of The Lost Epic Series'),
    new Author('Alexandre Dumas','alexandre.jpg','One of the greatest classic authors of all time')
);
