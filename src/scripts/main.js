'use strict';

const inputItem = document.querySelectorAll('input');

inputItem.forEach((item) => {
  const labelItem = document.createElement('label');

  labelItem.classList.add('field-label');
  labelItem.setAttribute('for', item.id);

  const placeholderText = item.name.replace(/([A-Z])/g, ' $1').trim();

  item.setAttribute(
    'placeholder',
    placeholderText[0].toUpperCase() + placeholderText.slice(1),
  );
  labelItem.textContent = item.name;
  item.insertAdjacentElement('beforebegin', labelItem);
});
