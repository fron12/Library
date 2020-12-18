let myLibrary = [
    {title: "Overwatch", author: "Jeff", pages: 100, read: "Read"},
    {title: "Fall Guys", author: "Head Bean", pages: 200, read: "Unread"}
];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

let bookDisplay = document.querySelector(".book-display");

myLibrary.forEach(book => {
    let bookCard = document.createElement("div");
    bookCard.style.marginBottom = "10px";    
    bookCard.style.border = "1px solid black"
    bookCard.innerHTML = 
        `Title: ${book.title}<br />
        Author: ${book.author}<br />
        Pages: ${book.pages}<br />
        Read: ${book.read}`
    bookDisplay.append(bookCard);
})