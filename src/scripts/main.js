'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin',
    `<label class='field-label'
      for='${input.id}'>
      ${input.name.split('Name').join(' name')}
    </label>`
  );

  input.setAttribute('placeholder',
    input.name.charAt(0).toUpperCase()
    + input.name.slice(1).split('Name').join(' name'));
}
