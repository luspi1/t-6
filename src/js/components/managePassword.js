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

export const getSmsCode = () => {
  registrationForm.querySelector('.submit-enter').classList.remove('_disabled');

  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    registrationForm.querySelector('.submit-enter').classList.add('_disabled');
    registrationForm.nextElementSibling.classList.remove('hidden');

    const id = timer();
    for (let i = 0; i < id; i++) {
      clearInterval(i);
    }
  });
};

getSmsCode();
