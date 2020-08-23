'use strict';

const field = document.querySelectorAll('.field-text');

[...field].map(input =>
  input.setAttribute('placeholder', isCapitalized(splitNames(input.name))));

const fieldsWrapper = document.querySelectorAll('.field');

[...fieldsWrapper].forEach(div => {
  div.insertAdjacentHTML('afterbegin', `
    <label for="${div.lastElementChild.id}"
      class="field-label">
        ${splitNames(div.lastElementChild.name)}
    </label>
  `);
});

function isCapitalized(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function splitNames(input) {
  return input === 'firstName'
    || input === 'lastName'
    ? input.slice(0, input.length - 4) + ' Name'
    : input;
}
