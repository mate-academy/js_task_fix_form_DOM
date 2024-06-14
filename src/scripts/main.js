'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map((element) => {
  const { id } = element;

  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', id);
  label.textContent = element.name;

  const value = element.name[0].toUpperCase() + element.name.slice(1);

  element.setAttribute('placeholder', value);

  element.parentNode.insertBefore(label, element.nextSibling);

  return label;
});
