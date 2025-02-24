'use strict';

const allInputs = document.querySelectorAll('input');

for (const el of allInputs) {
  const creatElement = document.createElement('label');

  creatElement.classList.add('field-label');
  creatElement.setAttribute('for', el.getAttribute('id'));
  creatElement.textContent = el.getAttribute('name');
  el.before(creatElement);
  el.setAttribute(`placeholder`, el.getAttribute('name'));
}
