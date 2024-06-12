'use strict';

const inputs = document.querySelectorAll('input');

const makeRigthPlaceholder = (nameValue) => {
  let placeholder = nameValue[0].toUpperCase();

  for (let i = 1; i < nameValue.length; i += 1) {
    if (nameValue[i] === nameValue[i].toUpperCase()) {
      placeholder += ' ';
    }

    placeholder += nameValue[i];
  }

  return placeholder;
};

inputs.forEach((el) => {
  el.placeholder = makeRigthPlaceholder(el.name);

  el.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${el.id}">
      ${el.placeholder.toUpperCase()}
    </label>`,
  );
});
