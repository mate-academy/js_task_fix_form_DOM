'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  el.placeholder = el.name.replace(/[A-Z]/g, letter => ` ${letter}`);
  el.placeholder = el.placeholder[0].toUpperCase() + el.placeholder.slice(1);

  el.insertAdjacentHTML('beforebegin', `
    <label for="${el.id}" class="field-label">
      ${el.name.replace(/[A-Z]/g, letter => ` ${letter}`).toUpperCase()}:
    </label>`);
});
