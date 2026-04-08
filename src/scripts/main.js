'use strict';

const input = document.querySelectorAll('form div.field input.field-text');

input.forEach((el) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = el.name;
  label.htmlFor = el.id;
  el.placeholder = el.name.replace(/\b\w/g, (l) => l.toUpperCase());
  

  el.parentElement.insertBefore(label, el);
});
