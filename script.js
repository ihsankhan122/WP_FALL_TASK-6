document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");
    const addBookForm = document.getElementById("add-book-form");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
  
    addBookForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const isbn = document.getElementById("isbn").value;
  
      if (!isDuplicate(title, author)) {
        const li = document.createElement("li");
        li.textContent = `Title: ${title}, Author: ${author}, ISBN: ${isbn}`;
        bookList.appendChild(li);
  
        addBookForm.reset();
      }
    });
  
    searchInput.addEventListener("input", function () {
      const searchQuery = searchInput.value.toLowerCase();
      searchResults.innerHTML = ""; // Clear previous search results
  
      const bookItems = bookList.querySelectorAll("li");
      bookItems.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
          const resultItem = document.createElement("li");
          resultItem.textContent = item.textContent;
          searchResults.appendChild(resultItem);
        }
      });
    });
  
    function isDuplicate(title, author) {
      const bookItems = bookList.querySelectorAll("li");
      for (let item of bookItems) {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(`Title: ${title.toLowerCase()}`) && itemText.includes(`Author: ${author.toLowerCase()}`)) {
          alert("This book is already in the list.");
          return true;
        }
      }
      return false;
    }
  });
  