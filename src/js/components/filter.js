import Isotope from 'isotope-layout';
const filter = document.querySelector('.filter')

if (filter) {
  document.getElementById('prev').addEventListener('click', function () {
    document.getElementById('list').scrollLeft -= 100;
  });

  document.getElementById('next').addEventListener('click', function () {
    document.getElementById('list').scrollLeft += 100;
  });
  document.getElementById('prev2').addEventListener('click', function () {
    document.getElementById('list2').scrollLeft -= 100;
  });

  document.getElementById('next2').addEventListener('click', function () {
    document.getElementById('list2').scrollLeft += 100;
  });
}

const itemsPerPage = 6;
let currentPage = 1;

const grid = document.querySelector('.houses__grid')







const iso = new Isotope(grid, {
  itemSelector: '.houses__item',
  layoutMode: 'fitRows',
});

let selectedPriceRange = null;
let selectedSizeRange = null;
let selectedFloor = null;

// Обработчик для фильтра цены
const filterBtnPrice = document.querySelectorAll('.filter__btn[data-radius]');
filterBtnPrice.forEach(function (button) {
  button.addEventListener('click', function () {
    filterBtnPrice.forEach(function (btn) {
      btn.classList.remove('filter__btn--active');
    });
    this.classList.add('filter__btn--active');
    selectedPriceRange = {
      min: parseFloat(this.getAttribute('data-radius')),
      max: parseFloat(this.getAttribute('data-radius2'))
    };
    applyFilters();
  });
});

// Обработчик для фильтра площади
const filterBtnSize = document.querySelectorAll('.filter__btn[data-size]');
filterBtnSize.forEach(function (button) {
  button.addEventListener('click', function () {
    filterBtnSize.forEach(function (btn) {
      btn.classList.remove('filter__btn--active');
    });
    this.classList.add('filter__btn--active');
    selectedSizeRange = {
      min: parseFloat(this.getAttribute('data-size')),
      max: parseFloat(this.getAttribute('data-size2'))
    };
    applyFilters();
  });
});

// Обработчик для фильтра этажности
const filterBtnFloor = document.querySelectorAll('.filter__btn[data-floor]');
filterBtnFloor.forEach(function (button) {
  button.addEventListener('click', function () {
    filterBtnFloor.forEach(function (btn) {
      btn.classList.remove('filter__btn--active');
    });
    this.classList.add('filter__btn--active');
    selectedFloor = parseFloat(this.getAttribute('data-floor'));
    applyFilters();
  });
});

function applyFilters() {
  iso.arrange({
    filter: function (itemElem) {
      let priceMatches = true;
      let sizeMatches = true;
      let floorMatches = true;

      if (selectedPriceRange) {
        let price = parseFloat(itemElem.getAttribute('data-price'));
        priceMatches = price >= selectedPriceRange.min && price <= selectedPriceRange.max;
      }

      if (selectedSizeRange) {
        let size = parseFloat(itemElem.getAttribute('data-sizeTotal'));
        sizeMatches = size >= selectedSizeRange.min && size <= selectedSizeRange.max;
      }

      if (selectedFloor !== null) {
        let floor = parseFloat(itemElem.getAttribute('data-floorTotal'));
        floorMatches = floor === selectedFloor;
      }

      return priceMatches && sizeMatches && floorMatches;
    }
  });
}


function updateItems(pageNumber) {
  const offset = (pageNumber - 1) * itemsPerPage;
  const end = offset + itemsPerPage;

  // Получите все элементы после фильтрации с помощью Isotope
  const filteredItems = iso.filteredItems.map(item => item.element);

  // Скройте все элементы
  filteredItems.forEach(item => item.style.display = 'none');
  filteredItems.forEach(item => item.style.position = 'absolute');
  // Покажите элементы для текущей страницы
  const itemsToShow = filteredItems.slice(offset, end);
  itemsToShow.forEach(item => item.style.display = '');

  // Обновите Isotope
  iso.arrange();
}

function createPaginationButtons(totalItems) {
  const paginationContainer = document.querySelector('.pagination-container');
  paginationContainer.innerHTML = ''; // Очистите предыдущие кнопки

  // Создайте и добавьте кнопку "Предыдущая"
  const prevButton = document.createElement('button');
  prevButton.innerText = 'назад';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateItems(currentPage);
      updatePaginationButtons();
    }
  });
  paginationContainer.appendChild(prevButton);

  // Создайте и добавьте кнопки номеров страниц
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.className = currentPage === i ? 'active' : '';
    pageButton.addEventListener('click', () => {
      currentPage = i;
      updateItems(currentPage);
      updatePaginationButtons();
    });
    paginationContainer.appendChild(pageButton);
  }

  // Создайте и добавьте кнопку "Следующая"
  const nextButton = document.createElement('button');
  nextButton.innerText = 'вперёд';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateItems(currentPage);
      updatePaginationButtons();
    }
  });
  paginationContainer.appendChild(nextButton);
}
function updatePaginationButtons() {
  const paginationContainer = document.querySelector('.pagination-container');
  const prevButton = paginationContainer.querySelector('button:first-child');
  const nextButton = paginationContainer.querySelector('button:last-child');
  const pageButtons = paginationContainer.querySelectorAll('button:not(:first-child):not(:last-child)');

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === pageButtons.length;

  pageButtons.forEach(button => {
    button.className = button.innerText == currentPage ? 'active' : '';
  });
}

function initPagination() {
  const totalItems = iso.filteredItems.length;
  createPaginationButtons(totalItems);
  updateItems(currentPage);
}
document.addEventListener('DOMContentLoaded', initPagination);














