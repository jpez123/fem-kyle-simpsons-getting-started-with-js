// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName);
    }
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    function loopBooks() {
        let books = '';
        for (let book of favoriteBooks) {
            books+= book + '\n';
        }
        return books;
    }
    console.log(`Favorite books: ${favoriteBooks.length}\n${loopBooks()}`);
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();