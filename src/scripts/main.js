'use strict';

const field = document.querySelectorAll('.field');
const fieldText = document.querySelectorAll('.field-text');

const arrayName = [...fieldText].map(el => el.getAttribute('name'));
const arrayId = [...fieldText].map(el => el.getAttribute('id'));

arrayName.forEach((el, i) => fieldText[i].setAttribute('placeholder',
  el[0].toUpperCase() + el.slice(1)
));

arrayId.forEach((el, i) => field[i].insertAdjacentHTML('afterbegin', `
  <label for=${el} class="field-label">
    ${arrayName[i].toUpperCase()}
  </label>
`));
