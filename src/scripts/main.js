'use strict';

const inputItem = document.querySelectorAll('input');

inputItem.forEach((item) => {
  const labelItem = document.createElement('label');

  labelItem.classList.add('field-label');
  labelItem.setAttribute('for', item.id);

  let placeholderText = item.name.replace(/([A-Z])/g, ' $1').trim();

  placeholderText = placeholderText[0].toUpperCase() + placeholderText.slice(1);

  item.setAttribute('placeholder', placeholderText);

  labelItem.textContent = placeholderText;
  item.insertAdjacentElement('beforebegin', labelItem);
});
