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

  renderBooks();
  clearInput();
  dialog.close();
});
}

function renderBooks() {
  const bookContainer = document.getElementById('container');
  bookContainer.innerHTML = '';

  myLibrary.forEach((item, index) => {
    const book = document.createElement('div');
    book.classList.add('book');

    const readIcon = item.read ? '<p>Read</p>' : '<img class="read-icon" src="check-circle.svg" alt="check icon" style="width: 20px;">';

    book.innerHTML = `
        <img class="delete-icon" src="delete-1-svgrepo-com.svg" alt="delete icon" style="width: 30px;">
              <img src="book-open-svgrepo-com.svg" id="book-image" alt="book icon" style="width: 80px;">
              <p class="title">Title: ${item.title}</p>
              <p class="author">Author: ${item.author}</p>
              <p class="pages">Pages: ${item.pages}</p>
               <span class="read-status">${readIcon}</span>
    `;

    const readStatus = book.querySelector('.read-status');

    readStatus.addEventListener("click", () => {
      item.read = !item.read;
      renderBooks(); 
    });

        const deleteIcon = book.querySelector('.delete-icon');
    deleteIcon.addEventListener("click", () => {
      myLibrary.splice(index, 1); 
      renderBooks(); 
    });

    bookContainer.appendChild(book);
  });
}
  
function clearInput() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

addBookToLibrary();
