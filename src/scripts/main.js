'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  const nameValue = el.name;
  let fixedNameValue = el.name[0].toUpperCase();

  for (let i = 1; i < nameValue.length; i++) {
    if (nameValue[i] === nameValue[i].toUpperCase()) {
      fixedNameValue += ' ';
    }

    fixedNameValue += nameValue[i];
  }

  el.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${el.id}">
        ${fixedNameValue}
      </label>`
  );

  el.placeholder = fixedNameValue;
});
