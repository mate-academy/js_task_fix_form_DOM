'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((item) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', item.id);
  label.textContent = item.name;

  const placeholderValue = item.name[0].toUpperCase() + item.name.slice(1);

  item.setAttribute('placeholder', placeholderValue);

  item.parentNode.prepend(label);
});
