'use strict';

const inputs = [...document.querySelectorAll('input')];

function fixingText(input, number) {
  return input.name[0].toUpperCase()
  + input.name.slice(1, number)
  + ' '
  + input.name.slice(number);
}

inputs.forEach(inp => {
  const label = document.createElement('label');

  label.classList = 'field-label';
  label.htmlFor = inp.id;

  label.textContent = inp.name;

  inp.parentElement.append(label);

  inp.placeholder = label.textContent[0].toUpperCase()
    + label.textContent.substring(1);

  if (inp.name === 'firstName') {
    inp.placeholder = fixingText(inp, 5);

    label.textContent = fixingText(inp, 5);
  }

  if (inp.name === 'lastName') {
    inp.placeholder = fixingText(inp, 4);

    label.textContent = fixingText(inp, 4);
  }
});
