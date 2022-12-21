'use strict';

const inputs = document.querySelectorAll('.field-text');

const space = function(text) {
    return text.split(/(?=[A-Z])/g).join(' ');
};

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = space(input.name);

  const eltern = input.parentElement;

  eltern.append(label);
});

inputs.forEach((input) => {
  const placeHolder = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', space(placeHolder));
});

// console.log(input);
