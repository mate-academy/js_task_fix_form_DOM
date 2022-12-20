'use strict';

const [...inputs] = document.querySelectorAll('input');

const [...fields] = document.querySelectorAll('.field');

function splitter(text) {
  let res = text;
  if (text !== text.toLowerCase()) {
    const word = res.split(/(?=[A-Z])/).join(' ');

    return word;
  }

  return text;
}

[...inputs].map((elem, index) => {
  elem.placeholder = splitter(elem.name);
});

[...fields].map((elem, index) => {
  elem.insertAdjacentHTML('afterbegin', `<label for="inputs[index].id" class="field-label">
    ${splitter(inputs[index].name)}
    </label>`);
});
