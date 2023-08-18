// вид списка событий
const btnViewGrid = document.querySelector('.events__btn-grid');
const btnViewRows = document.querySelector('.events__btn-rows');
const eventsList = document.querySelector('.events__list');

if (eventsList) {
  btnViewGrid.addEventListener('click', () => {
    if (btnViewRows.classList.contains('_active')) {
      btnViewRows.classList.remove('_active');
      btnViewGrid.classList.add('_active');
      eventsList.classList.remove('_rows');
    }
  });

  btnViewRows.addEventListener('click', () => {
    if (btnViewGrid.classList.contains('_active')) {
      btnViewGrid.classList.remove('_active');
      btnViewRows.classList.add('_active');
      eventsList.classList.add('_rows');
    }
  });
}

//модалка перехода к добавлению события
const createEventBlock = document.querySelector('.events__link._create');
const createEventButton = document.querySelector(
  '.events__modal-registration-button',
);
const eventModal = document.querySelector('.events__modal');
const closeModal = document.querySelector('.events__modal-close');

if (createEventBlock) {
  createEventBlock.addEventListener('click', (e) => {
    e.preventDefault();
    eventModal.classList.add('_active');
  });
  closeModal.addEventListener('click', () => {
    eventModal.classList.remove('_active');
  });
}

if (createEventButton) {
  createEventButton.addEventListener('click', (e) => {
    const target = e.target;
    if (eventModal.classList.contains('_active')) {
      if (target.closest('.events__item-create button')) {
        eventModal.classList.remove('_active');
      }
    }
  });
}

window.addEventListener('click', (e) => {
  const target = e.target;
  if (
    !target.closest('.events__modal') &&
    !target.closest('.events__link._create')
  ) {
    eventModal.classList.remove('_active');
  }
});
