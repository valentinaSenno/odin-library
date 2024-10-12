// show dialog
const dialog = document.getElementById("add-form");
const showButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  clearInput();
  dialog.close();
});

const addButton = document.getElementById("add-book");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary() {
    addButton.addEventListener("click", (event)=> {
    event.preventDefault();

    const newBook = new Book (
      document.getElementById('title').value,
      document.getElementById('author').value,
      document.getElementById('pages').value,
      document.getElementById('read').checked,
    );

  console.log(newBook); 

  myLibrary.push(newBook);

  console.log(myLibrary); 

  });
}

function clearInput() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

addButton.addEventListener("click", addBookToLibrary());