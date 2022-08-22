let myLibrary = []
let formWrapper = document.querySelector("#form-wrapper")
let form = document.querySelector("#addBookForm")
let submit = document.querySelector("#submit")
let library = document.querySelector("#content-wrapper")
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    info(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

let presetBook1 = new Book("Lord of the Rings", "J.R.R. Tolkein", 1178)
myLibrary.push(presetBook1)
let presetBook2 = new Book("Pinocchio", "Carlo Collodi", 560)
myLibrary.push(presetBook2)
let presetBook3 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1178)
myLibrary.push(presetBook3)

const addBook = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let title = document.getElementById('title').value;
    let author =  document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let book = new Book(title,author,pages);
    myLibrary.push(book)
    printlib();
    form.reset();
}

//calls new book form
showForm = () => {
    formWrapper.classList.remove("hide")
    submit.addEventListener('click', addBook)
}
hideForm = () => {
    formWrapper.classList.add("hide")
}

window.onload = function() {
    printlib();
  };

//prints
printlib = () => {
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        library.innerHTML += `<div id = "card" class="card" style="width: 17rem;">
        <div class="card-body">
        <h4 class="card-title">${myLibrary[i].title}</h5>
        <h5 class="card-subtitle mb-2 text-muted">Pages: ${myLibrary[i].author}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Pages: ${myLibrary[i].pages}</h6>
        </div>
        </div>`
    }
}

readStatus = () => {
    /* let readbtn = document.getElementById('readStatus') */
    this.classList.remove("read")
    this.classList.add("notread")
}