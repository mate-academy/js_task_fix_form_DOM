'use strict';

// write code here
const list = document.querySelectorAll('input');

[...list].map((el) => {
  const { id } = el;

  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', id);
  label.textContent = el.name;

  let value = el.name[0].toUpperCase() + el.name.slice(1);

  if (value === 'FirstName' || value === 'LastName') {
    value =
      el.name[0].toUpperCase() + el.name.slice(1, -4) + ' ' + el.name.slice(-4);
  }

  el.setAttribute('placeholder', value);

  el.parentNode.insertBefore(label, el.nextSibling);

  return label;
});
