const menuItems = document.querySelectorAll('.main-menu__item-min');

const tabsToggler = (buttons) => {
  buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('_active')) {
        buttons.forEach((item) => item.classList.remove('_active'));
        e.currentTarget.classList.add('_active');
      } else {
        e.currentTarget.classList.remove('_active');
      }
    });
  });
};

tabsToggler(menuItems);

// переключение таблиц на странице Списки

const contentTablesTogglerButtons = document.querySelectorAll(
  '[data-table-content-button]',
);

if (contentTablesTogglerButtons) {
  contentTablesTogglerButtons.forEach((item) => {
    tabsToggler(contentTablesTogglerButtons);

    item.querySelector('span').innerHTML = '';

    item.addEventListener('click', (e) => {
      const contentTables = document.querySelectorAll('[data-table-content]');
      const activeTable = document.querySelector(
        `[data-table-content = "${e.currentTarget.dataset.tableContentButton}"]`,
      );

      contentTables.forEach((item) => {
        item.classList.remove('_active');
      });

      activeTable.classList.add('_active');
    });
  });
}

//Страница СПИСКИ: подсчет количества заплативших участников в названиях кнопок-переключателей

if (window.location.href.includes('visitors-lists')) {
  const visitiorsCountTitle = document.querySelector('.lists-visitiors-count');

  const visitorsTable = document.querySelector('.visitors-table');
  const visitors = visitorsTable.querySelectorAll('tr.visitor');
  let paidVisitors = 0;

  visitors.forEach((item) => {
    item.querySelector('select.user-payment').selectedOptions[0].value === 1
      ? (paidVisitors += 1)
      : null;
  });
  visitiorsCountTitle.innerHTML = `(${paidVisitors}/${visitors.length})`;

  const groupsCountTitle = document.querySelector('.lists-groups-count');

  const groupsTable = document.querySelector('.groups-table');
  const groups = groupsTable.querySelectorAll('tr.group');
  let paidGroups = 0;

  groups.forEach((item) => {
    item.querySelector('select.group-payment').selectedOptions[0].value === 1
      ? (paidVisitors += 1)
      : null;
  });
  groupsCountTitle.innerHTML = `(${paidGroups}/${groups.length})`;

  const transportCountTitle = document.querySelector('.lists-transport-count');
  const transportTable = document.querySelector('.transport-table');
  const transports = transportTable.querySelectorAll('tr.transport');

  transportCountTitle.innerHTML = `(${transports.length})`;
}
