'use strict';

const addSpace = (text) => {
  const result = text.split('');

  result.forEach((el, index) => {
    if (el === el.toUpperCase() && result[index - 1] !== ' ') {
      result.splice(index, 0, ' ');
    }
  });

  return result.join('');
};

const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');

fields.forEach((el, index) => {
  el.insertAdjacentHTML('afterbegin',
    `<label for=${inputs[index].id} class=field-label>
    ${addSpace(inputs[index].name)}
    </input>
  </label>`);
});

inputs.forEach(el => {
  el.placeholder = addSpace(el.name)
    .charAt(0).toUpperCase() + addSpace(el.name).slice(1);
});
