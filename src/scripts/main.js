'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach(item => {
  const label = `
    <label class="field-label" for="${item.id}">
      ${changeToSpaces(item.name).toUpperCase()}
    </label>
  `;

  item.insertAdjacentHTML('beforebegin', label);
  item.setAttribute('placeholder', `${capitalize(changeToSpaces(item.name))}`);
});

function changeToSpaces(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return `${str.slice(0, i)} ${str.slice(i)}`;
    }
  }

  return str;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
