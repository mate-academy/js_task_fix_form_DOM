'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const label = document.createElement('label');
  const placeholder
    = input.name.charAt(0).toUpperCase()
    + input.name.slice(1).toLowerCase();

  label.innerHTML = `
    <label for='${input.id}' class='field-label'>
      ${input.name}
    </label>
  `;
  input.setAttribute('placeholder', placeholder);
  input.parentElement.append(label);
});
