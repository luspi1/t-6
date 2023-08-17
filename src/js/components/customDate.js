import AirDatepicker from 'air-datepicker';

const initAllDates = () => {
  const allDateInputs = document.querySelectorAll('.custom-date');

  if (allDateInputs) {
    allDateInputs.forEach((el) => {
      const customDate = new AirDatepicker(el, {
        container: el.closest('.modal') ? '.date-custom-container' : '',
      });

      el.addEventListener('click', (e) => {
        const featuredDate = e.currentTarget.value
          .split('.')
          .reverse()
          .join('-');

        if (featuredDate) {
          customDate.selectDate(featuredDate);
          customDate.setViewDate(featuredDate);
        }
      });
    });
  }
};

initAllDates();

export { initAllDates };
