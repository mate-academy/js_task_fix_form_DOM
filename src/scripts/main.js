'use strict';

const inputs = [...document.getElementsByTagName('input')];

inputs.forEach((input) => {
  const tag = document.createElement('label');
  const currentID = input.getAttribute('id');
  const regex = /[A-Z]/; // any capital letter
  const secondCapitalIndex = input.name.search(regex); // for camelCase words
  const hasTwoWords = secondCapitalIndex !== -1;
  let placeholderValue = '';

  // setting correct placeholder value
  if (hasTwoWords) {
    placeholderValue += `${input.name[0].toUpperCase()}${input.name.slice(1, secondCapitalIndex)} ${input.name.slice(secondCapitalIndex)}`;
  } else {
    placeholderValue += `${input.name[0].toUpperCase()}${input.name.slice(1)}`;
  }

  tag.className = 'field-label';
  tag.setAttribute('for', currentID);
  tag.textContent = input.name.toUpperCase();

  input.setAttribute('placeholder', placeholderValue);

  input.parentNode.insertBefore(tag, input);
});
