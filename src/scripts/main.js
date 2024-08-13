'use strict';

const formArr = document.querySelectorAll('input');

setPlaceholder(formArr);
createElement(formArr);

function setPlaceholder(inputs) {
  inputs.forEach((input) => {
    const nameHolder = separateWords(input.getAttribute('name'));

    input.setAttribute('placeholder', nameHolder);
  });
}

function createElement(elements) {
  elements.forEach((el) => {
    const label = document.createElement('label');
    const textLabel = separateWords(el.getAttribute('name')).toUpperCase();

    label.setAttribute('class', 'field-label');

    el.before(label, textLabel);
  });
}

function separateWords(word) {
  let separatedStr = '';

  [...word].forEach((ch, i) => {
    if (i === 0) {
      separatedStr += ch.toUpperCase();
    } else if (ch === ch.toUpperCase()) {
      separatedStr += ' ' + ch;
    } else {
      separatedStr += ch;
    }
  });

  return separatedStr;
}
