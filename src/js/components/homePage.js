import { initAllMasks } from './inputMask';
import { initSelects } from './customSelect';
import { getSmsCode } from './managePassword';
import { manageModal } from './manageModal';

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

if (window.location.pathname == '/' || window.location.href.includes('index')) {
  window.addEventListener('click', (e) => {
    const target = e.target;
    if (
      eventModal &&
      !target.closest('.events__modal') &&
      !target.closest('.events__link._create')
    ) {
      eventModal.classList.remove('_active');
    }
  });
}

//Форма регистрации на главной

const changeHomeRegContent = (state = 1, content) => {
  const statesFragment = document.querySelector('#homeStates')?.content;

  const currentState = statesFragment
    .querySelector(`.home-registration__state[data-state="${state}"]`)
    ?.cloneNode(true);
  content.innerHTML = '';
  content.append(currentState);

  console.log(currentState);

  return currentState;
};

const homeRegForm = document.querySelector('.home-registration__reg-form');

if (homeRegForm) {
  const homeStateSelect = homeRegForm.querySelector(
    '.home-registration__state-select',
  );
  const homeRegFormContent = homeRegForm.querySelector(
    '.home-registration__content',
  );

  homeStateSelect.addEventListener('change', (e) => {
    let stateId = e.target.value;
    changeHomeRegContent(stateId, homeRegFormContent);

    initAllMasks();
    initSelects();

    getSmsCode();
    manageModal();
  });
  //отправка данных формы
  //homeRegForm.addEventListener('submit', handleRegSubmit);
}
