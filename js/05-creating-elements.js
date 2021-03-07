const titleEl = document.createElement('h1'); 
// const titleEl = document.createElement('h1'); - створення елемента в памяті
titleEl.classList.add('page-title');
titleEl.textContent = 'This is title';

// console.log(titleEl);
// console.log(document.body);
// console.log(document.head);

// document.body.appendChild(titleEl); - will be in the end off body teg)

const imageEl = document.createElement('img');
imageEl.src = "https://images.pexels.com/photos/5212573/pexels-photo-5212573.jpeg?cs=srgb&dl=pexels-art%C5%ABras-kokorevas-5212573.jpg&fm=jpg";
imageEl.alt = 'picture';
imageEl.width = 640;
// console.log('imageEl', imageEl);
// console.log(imageEl.width);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);

// document.body.appendChild(imageEl);
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = "/profile";

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);
// console.log(navItemEl);
// console.log(navLinkEl);
const navEl = document.querySelector('.site-nav');
navEl.appendChild(navItemEl);

// navEl.insertBefore(navItemEl, navEl.firstElementChild);
navEl.insertBefore(navItemEl, navEl.firstElementChild);