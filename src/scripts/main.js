'use strict';

const listInputs = document.querySelectorAll('input');

listInputs.forEach(element => {
  element.insertAdjacentHTML('beforebegin', `
    <label for="${element.id}" class="field-label">
      ${element.name.toUpperCase()}
    </label>
  `);

  element.placeholder = element.name[0].toUpperCase() + element.name.slice(1);
});
