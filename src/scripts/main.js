'use strict';

const addSpace = (text, words, letters) => {
  if (text.includes(words)) {
    const separate = text.split('');

    separate.splice(text.indexOf(letters), 0, ' ');

    return separate.join('');
  }

  return text;
};

const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');

fields.forEach((el, index) => {
  el.insertAdjacentHTML('afterbegin',
    `<label for=${inputs[index].id} class=field-label>
    ${addSpace(inputs[index].name, 'Name', 'N')}
    </input>
  </label>`);
});

inputs.forEach(el => {
  el.placeholder = addSpace(el.name, 'Name', 'N')
    .charAt(0).toUpperCase() + addSpace(el.name, 'Name', 'N').slice(1);
});
