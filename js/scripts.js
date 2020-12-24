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

function addBookToLibrary(event){
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read").value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    // console.log(`newBook = ${newBook.info()}`)
    let bookCard = document.createElement("div");
    bookCard.style.marginBottom = "10px";    
    bookCard.style.border = "1px solid black"
    bookCard.style.padding = "5px"
    bookCard.innerHTML = 
        `Title: ${newBook.title}<br />
        Author: ${newBook.author}<br />
        Pages: ${newBook.pages}<br />
        Read: ${newBook.read}`
    bookDisplay.append(bookCard);
    event.preventDefault();
}

let bookDisplay = document.querySelector(".book-display");

myLibrary.forEach(book => {
    let bookCard = document.createElement("div");
    bookCard.style.marginBottom = "10px";    
    bookCard.style.border = "1px solid black";
    bookCard.style.padding = "5px";
    bookCard.innerHTML = 
        `Title: ${book.title}<br />
        Author: ${book.author}<br />
        Pages: ${book.pages}<br />
        Read: ${book.read}`
    bookDisplay.append(bookCard);
})

let form = document.querySelector(".inputs");
form.addEventListener("submit", addBookToLibrary, true);