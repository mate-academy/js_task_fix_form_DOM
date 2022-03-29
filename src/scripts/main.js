'use strict';

const input = document.querySelectorAll('input');
const div = document.querySelectorAll('.field');

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input[i].id);

  const slpitName = input[i].name.split('');
  const toUpper = slpitName[0].toLocaleUpperCase();
  const rest = [...slpitName];

  rest.splice(0, 1);

  let capitalize = [toUpper, ...rest].join('');

  if (capitalize === 'FirstName' || capitalize === 'LastName') {
    const name = capitalize.slice(-4);
    const firstPart = capitalize.slice(0, -4);

    capitalize = `${firstPart} ${name}`;
  }

  input[i].setAttribute('placeholder', capitalize);
  label.innerHTML = capitalize;

  div[i].append(label);

  console.log(capitalize);
}
