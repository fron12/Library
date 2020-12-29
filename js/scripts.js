let myLibrary = [
    {title: "Overwatch", author: "Jeff", pages: 100, read: "Read", index: 1},
    {title: "Fall Guys", author: "Head Bean", pages: 200, read: "Unread", index: 2}
];

function Book(title, author, pages, read, index){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.index = index,
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

function addBookToLibrary(event){
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read").value;
    let bookIndex = myLibrary.length + 1;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead, bookIndex);
    myLibrary.push(newBook);
    populateDisplay();
    event.preventDefault();
}

let bookDisplay = document.querySelector(".book-display");

function populateDisplay() {
    bookDisplay.innerHTML = "";
    updateLibraryIndexes();
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.style.marginBottom = "10px";    
        bookCard.style.border = "1px solid black";
        bookCard.style.padding = "5px";
        bookCard.setAttribute("index", book.index);
        bookCard.setAttribute("read-status", book.read);
        bookCard.innerHTML = 
            `Title: ${book.title}<br />
            Author: ${book.author}<br />
            Pages: ${book.pages}<br />
            Read: ${book.read}<br />
            Index: ${book.index}<br />
            <button class="remove">Remove</button><br />
            <button class="update">Change Read Status</button>`
        bookDisplay.append(bookCard);
    })
    let removeButton = document.querySelectorAll(".remove");
    removeButton.forEach(button => {
        button.addEventListener("click", removeBook, true);
    })
    let updateButton = document.querySelectorAll(".update");
    updateButton.forEach(button => {
        button.addEventListener("click", changeReadStatus, true);
    })
}

function removeBook(event){
    let targetIndex = event.target.parentNode.getAttribute("index");
    myLibrary.splice(targetIndex - 1, 1);
    populateDisplay();
}

function updateLibraryIndexes(){
    for(let i = 0; i < myLibrary.length; i++){
        myLibrary[i].index = i + 1;
    }
}

function changeReadStatus(event){
    let targetIndex = event.target.parentNode.getAttribute("index");
    let targetStatus = event.target.parentNode.getAttribute("read-status");
    if(targetStatus === "Read"){
        myLibrary[targetIndex - 1].read = "Unread";
    }
    else{
        myLibrary[targetIndex - 1].read = "Read"
    }
    populateDisplay();
}

let form = document.querySelector(".inputs");
form.addEventListener("submit", addBookToLibrary, true);

populateDisplay();