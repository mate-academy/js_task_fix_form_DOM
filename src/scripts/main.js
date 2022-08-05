'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  el.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${el.id}">
        ${el.name.toUpperCase()}
      </label>`
  );
  el.placeholder = `${el.name.toUpperCase()}`;
});
