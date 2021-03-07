const magicBtn = document.querySelector('.js-magic-btn');

const imageEl = document.querySelector('.hero__image');
// console.log('image', imageEl);
// console.log(imageEl.src);

// If I want to change property of imageEl src
// imageEl.src = 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto = compress & cs=tinysrgb & dpr=2 & w=480'

// magicBtn.addEventListener('click', () => {
//     const imageEl = document.querySelector('.hero__image');
//     console.log('image', imageEl);
//     console.log(imageEl.src);
//     imageEl.alt = 'It is cat';

// });

// const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);
// console.log(heroTitleEl.textContent);

// If I want to change textContent
// heroTitleEl.textContent = 'I am sweet cake';

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl);

// hasAttribute can return in console true or false
// console.log(imageEl.hasAttribute('src'));

const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
console.log(actions);
console.log(actions[0].dataset.action);

// magicBtn.addEventListener('click', () => {
//     const inputEl = document.querySelector('.js-input');
//     console.log(inputEl.value);
//     inputEl.value = 'ergrtrbrb';
// })