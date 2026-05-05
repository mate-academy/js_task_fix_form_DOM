'use strict';

// write code here
const input = [...document.querySelectorAll('form input')];

input.forEach((item) => {
  const label = document.createElement('label');

  const namePlaceholder =
    item.getAttribute('name')[0].toUpperCase() +
    item.getAttribute('name').slice(1);

  item.setAttribute('placeholder', namePlaceholder);

  label.classList.add('field-label');
  label.setAttribute('for', item.id);
  label.textContent = item.getAttribute('name');
  item.parentElement.appendChild(label);
});
