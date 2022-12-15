'use strict';

const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');

fields.forEach((el, index) => {
  el.insertAdjacentHTML('afterbegin',
    `<label for=${inputs[index].id} class=field-label>
    ${inputs[index].name}
    </input>
  </label>`);
});

inputs.forEach(el => {
  el.placeholder = el.name.charAt(0).toUpperCase() + el.name.slice(1);
});
