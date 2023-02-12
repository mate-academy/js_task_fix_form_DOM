'use strict';
// debugger;

const collection = document.querySelectorAll('input');

collection.forEach(input => {
  const names = input.name.split(/(?=[A-Z])/).join(' ');

  input.insertAdjacentHTML('beforebegin', `
    <label for="${input.id}" class="field-label">
      ${names}
    </label>
  `);

  input.placeholder = `${names[0].toUpperCase() + names.slice(1)}`;
});
