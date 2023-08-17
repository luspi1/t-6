const showPasswordButtons = document.querySelectorAll('.btn-show-pass');

const submitEnterButton = document.querySelector('.submit-enter');
const resetPasswordForm = document.querySelector('.reset-password-form');
const resetPasswordButton = document.querySelector('.reset-password-button');

const smsTimer = document.querySelector('#smsTimer');
let smsSeconds = smsTimer.innerHTML.split(':')[1];

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

if (resetPasswordButton) {
  resetPasswordButton.addEventListener('click', () => {
    submitEnterButton.classList.add('disabled');

    resetPasswordForm.style.display = 'block';

    const smsIntervalId = setInterval(() => {
      smsSeconds--;
      if (smsSeconds === 0) clearInterval(smsIntervalId);
      smsTimer.innerHTML = `0:${smsSeconds}`;
    }, 1000);
  });
}
