const showMore = document.querySelector('.modular__more');
const productsLength = document.querySelectorAll('.modular__item').length;
let items = 3;

if (showMore) {
  showMore.addEventListener('click', () => {
    items += 1;
    const array = Array.from(document.querySelector('.modular__content').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === productsLength) {
      showMore.style.display = 'none';
    }
  });
}



const showMoreGallery = document.querySelector('.gallery__more');
const productsLengthGallery = document.querySelectorAll('.gallery__item').length;
let items2 = 9;

if (showMoreGallery) {
  showMoreGallery.addEventListener('click', () => {
    items2 += 3;
    const array = Array.from(document.querySelector('.gallery__grid').children);
    const visItems = array.slice(0, items2);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === productsLengthGallery) {
      showMoreGallery.style.display = 'none';
    }
  });
}
