'use strict';

const divs = [...document.querySelectorAll('div')];

divs.forEach((div) => {
  const newLabel = document.createElement('label');

  if (div.classList.contains('field')) {
    const input = div.querySelector('input');

    const label = div.insertAdjacentElement('afterbegin', newLabel);

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;

    input.setAttribute('placeholder', capitalize(input.name));
  }
});

function capitalize(s) {
  if (!s || s === '') {
    return;
  }

  return String(s[0]).toUpperCase() + String(s).slice(1);
}
