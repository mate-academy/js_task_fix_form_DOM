'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(inp => {
  const label = document.createElement('label');

  label.classList = 'field-label';
  label.htmlFor = inp.id;

  label.textContent = inp.name.includes('val')
    ? inp.name.replace('val', 'val')
    : inp.name;

  inp.parentElement.append(label);

  inp.placeholder = label.textContent[0].toUpperCase()
    + label.textContent.substring(1);

  if (inp.name === 'firstName') {
    inp.placeholder = label.textContent[0].toUpperCase()
    + label.textContent.substring(1, 5) + ' '
    + label.textContent.substring(5);

    label.textContent = inp.name.slice(0, 5)
    + ' ' + inp.name.slice(5);
  };

  if (inp.name === 'lastName') {
    inp.placeholder = label.textContent[0].toUpperCase()
    + label.textContent.substring(1, 4) + ' '
    + label.textContent.substring(4);

    label.textContent = inp.name.slice(0, 4)
    + ' ' + inp.name.slice(4);
  };
});
