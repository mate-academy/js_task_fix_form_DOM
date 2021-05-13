'use strict';

const list = document.body.querySelectorAll('input');
const array = [...list].map(item => item);

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  element.placeholder = element.name.toLocaleUpperCase();

  element.innerHTML = `
  <label for="${element.id}" class="field-label">
    ${element.name}
  </label>
  `;
}
