'use strict';

const inputs = document.querySelectorAll('input');

const splitLabel = text => {
  switch (true) {
    case text.toLowerCase() === 'firstname':
      return 'First Name';

    case text.toLowerCase() === 'lastname':
      return 'Last Name';

    default:
      return text[0].toUpperCase() + text.slice(1);
  }
};

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
        ${splitLabel(input.name)}
    </label>
  `);
  input.placeholder = splitLabel(input.name);
}
