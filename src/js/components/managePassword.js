import { SMS_SECONDS_START_VALUE, TIME_INTERVAL_MILLISECONDS } from '../_vars';
const showPasswordButtons = document.querySelectorAll('.btn-show-pass');

const registrationForm = document.querySelector('.home-registration__reg-form');

if (showPasswordButtons) {
  showPasswordButtons.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.previousElementSibling.type === 'password') {
        item.previousElementSibling.type = 'text';
        item.classList.remove('_open');
      } else {
        item.previousElementSibling.type = 'password';
        item.classList.add('_open');
      }
    });
  });
}

const timer = () => {
  const smsTimer = document.querySelector('#smsTimer');
  smsTimer.innerHTML = `0:${SMS_SECONDS_START_VALUE}`;

  let smsSeconds = SMS_SECONDS_START_VALUE;

  const smsIntervalId = setInterval(() => {
    smsSeconds--;
    if (smsSeconds === 0) clearInterval(smsIntervalId);
    smsTimer.innerHTML = `0:${smsSeconds}`;
  }, TIME_INTERVAL_MILLISECONDS);

  return smsIntervalId;
};

const handleSmsSubmit = (e) => {
  e.preventDefault();
  e.currentTarget.querySelector('.submit-enter').classList.add('_disabled');
  e.currentTarget.nextElementSibling.classList.remove('hidden');
  const timerId = e.currentTarget.dataset.timer;
  if (timerId) clearInterval(timerId);
  const id = timer();
  e.currentTarget.setAttribute('data-timer', id);
};

export const getSmsCode = () => {
  registrationForm.querySelector('.submit-enter').classList.remove('_disabled');
  registrationForm.removeEventListener('submit', handleSmsSubmit);
  registrationForm.addEventListener('submit', handleSmsSubmit);
};

getSmsCode();
