'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(inp => {
  const label = document.createElement('label');

  label.classList = 'field-label';
  label.htmlFor = inp.id;

  label.textContent = inp.name;

  inp.parentElement.append(label);

  inp.placeholder = label.textContent[0].toUpperCase()
    + label.textContent.substring(1);

  if (inp.name === 'firstName') {
    inp.placeholder = inp.name[0].toUpperCase()
    + inp.name.slice(1, 5)
    + ' '
    + inp.name.slice(5);

    label.textContent = inp.name[0].toUpperCase()
    + inp.name.slice(1, 5)
    + ' '
    + inp.name.slice(5);
  }

  if (inp.name === 'lastName') {
    inp.placeholder = inp.name[0].toUpperCase()
    + inp.name.slice(1, 4)
    + ' '
    + inp.name.slice(4);

    label.textContent = inp.name[0].toUpperCase()
    + inp.name.slice(1, 4)
    + ' '
    + inp.name.slice(4);
  }
});
