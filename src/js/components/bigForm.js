//отображение новой площадки на create-event
const showPlaceBtn = document.querySelector('.big-form__btn-new-place');
const newPlace = document.querySelector('.big-form__new-place');

if (showPlaceBtn) {
  // showPlaceBtn.addEventListener('click', ({ currentTarget }) => {
  showPlaceBtn.addEventListener('click', () => {
    newPlace.classList.toggle('_active');
    showPlaceBtn.classList.toggle('_rotate');
  });
}

//отображение блоков при изменении checkbox
const showByCheckbox = (checkbox, parent) => {
  const checkState = () => {
    if (checkbox.checked) {
      checkbox.closest(parent).classList.add('_active');
    } else {
      checkbox.closest(parent).classList.remove('_active');
    }
  };
  checkState();
  checkbox.addEventListener('change', checkState);
};

const showListCheckboxes = document.querySelectorAll('input[data-show-list]');
const commandsCheckbox = document.querySelector('#severalMembers');

if (showListCheckboxes) {
  showListCheckboxes.forEach((checkbox) => {
    showByCheckbox(checkbox, '.big-form__show-wrapper');
  });
}

if (commandsCheckbox) {
  showByCheckbox(commandsCheckbox, '.big-form__commands-wrapper');
}

//стр tickets

const tickets = document.querySelector('.tickets');
const showTicketsBlock = () => {
  const reusableCheckboxes = document.querySelectorAll('[data-reusable]');
  reusableCheckboxes.forEach((checkbox) => {
    showByCheckbox(checkbox, '.big-form__tickets-show');
  });

  const paidTickets = document.querySelectorAll('[data-paidTicket]');
  paidTickets.forEach((item) => {
    item.addEventListener('change', ({ currentTarget }) => {
      const ticketRefund = currentTarget
        .closest('.big-form__item')
        .querySelector('[data-ticketRefund]');
      if (currentTarget.checked === true) {
        ticketRefund.disabled = '';
      } else {
        ticketRefund.checked = false;
        ticketRefund.disabled = true;
      }
    });
  });
};

if (tickets) {
  showTicketsBlock();
}

//  активность checkboxes
const showCheckboxes = document.querySelectorAll('input[data-show-checkbox]');

if (showCheckboxes) {
  showCheckboxes.forEach((checkbox) => {
    const checkboxDisabled = checkbox
      .closest('.big-form__checkboxes > li')
      .querySelector('input[disabled]');
    const checkboxCars = checkbox
      .closest('.big-form__checkboxes > li')
      .querySelectorAll('.big-form__cars input[disabled]');
    const checkedState = () => {
      if (checkbox.checked) {
        checkboxDisabled.disabled = false;
        if (checkboxCars) {
          checkboxCars.forEach((item) => (item.disabled = false));
        }
      } else {
        checkboxDisabled.disabled = true;
        checkboxDisabled.checked = false;
        if (checkboxCars) {
          checkboxCars.forEach((item) => {
            item.disabled = true;
            item.checked = false;
          });
        }
      }
    };
    checkedState();
    checkbox.addEventListener('change', checkedState);
  });
}

//валидация пароля

const firstInputPass = document.querySelector('.password  input');

const secondWrapperPass = document.querySelector(
  '.big-form__wrapper.second-password',
);
const secondInputPass = document.querySelector(
  '.big-form__wrapper.second-password input',
);
const errorWarning = document.querySelector('.big-form__error-warning');
const clearValue = document.querySelector('.big-form__btn-clear');
const successful = document.querySelectorAll('.big-form__wrapper.successful');

const removeOkSuccessful = () => {
  successful.forEach((item) => {
    if (item.classList.contains('_ok')) {
      item.classList.remove('_ok');
    }
  });
};

const addOkSuccessful = () => {
  successful.forEach((item) => item.classList.add('_ok'));
};

if (firstInputPass && secondInputPass) {
  firstInputPass.addEventListener('input', () => {
    if (firstInputPass.value.trim() !== secondInputPass.value.trim()) {
      removeOkSuccessful();
    }
  });
}

if (secondInputPass) {
  secondInputPass.addEventListener('input', () => {
    if (secondInputPass.value.trim() === '') {
      secondWrapperPass.classList.add('_error');
      errorWarning.innerText = 'Необходимо ввести пароль еще раз';
      clearValue.classList.remove('_active');
      removeOkSuccessful();
    } else if (secondInputPass.value.trim() !== firstInputPass.value.trim()) {
      secondWrapperPass.classList.add('_error');
      errorWarning.innerText = 'Пароли не совпадают';
      clearValue.classList.add('_active');
      removeOkSuccessful();

      clearValue.addEventListener('click', () => {
        secondInputPass.value = '';
        clearValue.classList.remove('_active');
      });
    } else {
      secondWrapperPass.classList.remove('_error');
      clearValue.classList.remove('_active');
      addOkSuccessful();
    }
  });
}
