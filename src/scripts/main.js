'use strict';

const inputs = document.querySelectorAll('input');

for (const ch of inputs) {
  const namee = ch.getAttribute('name');
  const id = ch.getAttribute('id');

  ch.setAttribute('placeholder', namee[0].toUpperCase() + namee.slice(1));

  ch.insertAdjacentHTML(
    'beforebegin',
    `<label class='field-label' for='${id}'>${namee}</label>`,
  );
}
