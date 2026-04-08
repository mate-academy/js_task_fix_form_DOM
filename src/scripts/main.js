'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalizedName(input.name);

  input.before(label);
  input.setAttribute('placeholder', capitalizedName(input.name));
});

function capitalizedName(inputName) {
  const capitalizeName = inputName.split('');

  for (let i = 0; i < capitalizeName.length; i++) {
    if (capitalizeName[i].toUpperCase() === capitalizeName[i]) {
      capitalizeName[i] = ' ' + capitalizeName[i];
    }
  }

  return capitalizeName[0].toUpperCase() + capitalizeName.join('').slice(1);
}
