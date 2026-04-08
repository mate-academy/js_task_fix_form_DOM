'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((el) => {
  if (!el.name || !el.id) {
    return;
  }
  createNeededLabel(el);
  changeInput(el);
});

function createNeededLabel(el) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', el.id);
  label.textContent = el.name;

  el.insertAdjacentElement('afterend', label);
}

function changeInput(el) {
  el.setAttribute(
    'placeholder',
    el.name.charAt(0).toUpperCase() + el.name.slice(1).toLowerCase(),
  );
}
