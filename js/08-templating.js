const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);

// titleEl.innerHTML = ''; - видалити значення елемента

titleEl.insertAdjacentHTML('beforeend', '<a href="">This iss</a>');