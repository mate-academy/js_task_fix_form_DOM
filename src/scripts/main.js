'use strict';

const inputItem = document.querySelectorAll('input');

inputItem.forEach((item) => {
  const labelItem = document.createElement('label');

  labelItem.classList.add('field-label');
  labelItem.setAttribute('for', item.id);
  labelItem.textContent = item.name;

  item.setAttribute(
    'placeholder',
    item.name[0].toUpperCase() + item.name.slice(1),
  );
  item.insertAdjacentElement('beforebegin', labelItem);
});
