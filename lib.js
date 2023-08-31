class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

const library = [];

function addBook(title, author) {
    const book = new Book(title, author);
    library.push(book);
}

function borrowBook(title) {
    const book = library.find(book => book.title === title);
    if (book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            console.log(`You have borrowed "${book.title}" by ${book.author}.`);
        } else {
            console.log(`"${book.title}" is already borrowed.`);
        }
    } else {
        console.log(`"${title}" is not found in the library.`);
    }
}

function returnBook(title) {
    const book = library.find(book => book.title === title);
    if (book) {
        if (!book.isAvailable) {
            book.isAvailable = true;
            console.log(`You have returned "${book.title}" by ${book.author}.`);
        } else {
            console.log(`"${book.title}" is already available.`);
        }
    } else {
        console.log(`"${title}" is not found in the library.`);
    }
}

function listBooks() {
    console.log("Library Books:");
    library.forEach(book => {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Availability: ${book.isAvailable ? 'Available' : 'Borrowed'}\n`);
    });
}


addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");
addBook("The Hobbit", "J.R.R. Tolkien");

listBooks();

borrowBook("Harry Potter and the Sorcerer's Stone\n");

listBooks();