'use strict';

const [...inputs] = document.querySelectorAll('input');

const [...fields] = document.querySelectorAll('.field');

function splitter(text) {
  const res = text;

  if (text !== text.toLowerCase()) {
    const word = res.split(/(?=[A-Z])/).join(' ');

    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

[...inputs].map((elem, index) => {
  elem.placeholder = splitter(elem.name);
});

[...fields].map((elem, index) => {
  elem.insertAdjacentHTML('afterbegin', `<label for="inputs[index].id" class="field-label">
    ${splitter(inputs[index].name)}
    </label>`);
});
