const showPasswordButtons = document.querySelectorAll('.btn-show-pass');

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
  smsTimer.innerHTML = '0:30';

  let smsSeconds = smsTimer.innerHTML.split(':')[1];

  const smsIntervalId = setInterval(() => {
    smsSeconds--;
    if (smsSeconds === 0) clearInterval(smsIntervalId);
    smsTimer.innerHTML = `0:${smsSeconds}`;
  }, 1000);

  return smsIntervalId;
};

export const initResetPassword = () => {
  document.querySelector('.submit-enter').classList.remove('_disabled');
  document.querySelector('.reset-password-form').style.display = 'none';
  const resetPasswordButton = document.querySelector('.reset-password-button');

  resetPasswordButton.addEventListener('click', () => {
    document.querySelector('.submit-enter').classList.add('_disabled');
    document.querySelector('.reset-password-form').style.display = 'block';

    document
      .querySelector('.home-registration__reg-form')
      .classList.add('_long-form');

    const id = timer();
    for (let i = 0; i < id; i++) {
      clearInterval(i);
    }
  });
};

initResetPassword();
