'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const { name: inputlName, id } = element;

  label.setAttribute('for', `${id}`);
  label.textContent = inputlName;
  element.placeholder = inputlName;

  const newInput = [label, element];

  element.replaceWith(...newInput, element);
});
