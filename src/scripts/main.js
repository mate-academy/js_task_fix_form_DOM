'use strict';

const inputEl = document.querySelectorAll('input');

inputEl.forEach((x) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', x.id);

  label.textContent =
    x.name.slice(0, 1).toUpperCase() + x.name.slice(1).toLowerCase();
  x.parentNode.insertBefore(label, x);
  x.placeholder = label.textContent;
});
