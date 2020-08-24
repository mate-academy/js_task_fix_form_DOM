'use strict';

for (const elem of document.querySelectorAll('.field')) {
  const label = document.createElement('label');
  const input = elem.firstElementChild;

  label.textContent = input.name.toUpperCase();
  label.htmlFor = input.id;
  label.className = 'elem-label';

  elem.prepend(label);

  input.setAttribute('placeholder', input.name.replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase()));
};
