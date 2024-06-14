'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map((element) => {
  const { id } = element;

  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', id);
  let value;

  if (element.name === 'firstName') {
    value = 'First Name';
  } else if (element.name === 'lastName') {
    value = 'Last Name';
  } else {
    value = element.name[0].toUpperCase() + element.name.slice(1);
  }

  label.textContent = value;

  element.setAttribute('placeholder', value);

  element.parentNode.insertBefore(label, element.nextSibling);

  return label;
});
