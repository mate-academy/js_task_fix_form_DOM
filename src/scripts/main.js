'use strict';

const formArr = document.querySelectorAll('input');

setPlaceholder(formArr);
createElement(formArr);

function setPlaceholder(inputs) {
  inputs.forEach((input) => {
    const nameHolder =
      input.getAttribute('name').charAt(0).toUpperCase() +
      input.getAttribute('name').slice(1);

    input.setAttribute('placeholder', nameHolder);
  });
}

function createElement(elements) {
  elements.forEach((el) => {
    const label = document.createElement('label');
    const textLabel = `${el.getAttribute('name')}`.toUpperCase();

    label.setAttribute('class', 'field-label');

    el.before(label, textLabel);
  });
}
