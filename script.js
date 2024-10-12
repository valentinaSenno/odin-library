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

  const bookContainer = document.getElementById('container');
  bookContainer.innerHTML = '';

  myLibrary.forEach(item => {
    const book = document.createElement('div');
    book.classList.add('book');

    const readIcon = !item.read ? '<img class="read-icon" src="check-circle.svg" alt="check icon" style="width: 20px;">' : '<p>Read</p>';

    book.innerHTML = `
        <img class="delete-icon" src="delete-1-svgrepo-com.svg" alt="delete icon" style="width: 30px;">
              <img src="book-open-svgrepo-com.svg" id="book-image" alt="book icon" style="width: 80px;">
              <p class="title">Title: ${item.title}</p>
              <p class="author">Author: ${item.author}</p>
              <p class="pages">Pages: ${item.pages}</p>
              ${readIcon}
    `;

    bookContainer.appendChild(book);
});

clearInput();
dialog.close();

  });
}

function clearInput() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

addButton.addEventListener("click", addBookToLibrary());