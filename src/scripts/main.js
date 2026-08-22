'use strict';

document.querySelectorAll('form input').forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;

  const formattedName = input.name[0].toUpperCase() + input.name.slice(1);

  label.textContent = formattedName;
  input.placeholder = formattedName;

  const parentElem = input.parentElement;

  parentElem.append(label);
});
