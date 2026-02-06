'use strict';

// write code here
const inputs = document.querySelectorAll('input');

[...inputs].forEach((element) => {
  const label = document.createElement('label');

  label.classList.toggle('field-label');
  label.htmlFor = element.id;
  label.textContent = element.name;

  const placeholder = element.name[0].toUpperCase() + element.name.slice(1);

  element.placeholder = placeholder;
  element.parentNode.prepend(label);
});
