'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input.getAttribute('id'));

    const nameOfInput = input.getAttribute('name') || '';
    const capitalizedName =
      nameOfInput.charAt(0).toUpperCase() + nameOfInput.slice(1);

    const splitedName = capitalizedName.split('');

    for (let i = 0; i < splitedName.length; i++) {
      if (
        splitedName[i] === splitedName[i].toLowerCase() &&
        i + 1 < splitedName.length &&
        splitedName[i + 1] === splitedName[i + 1].toUpperCase()
      ) {
        splitedName[i] += ' ';
      }
    }

    const normalizedName = splitedName.join('');

    label.textContent = normalizedName;
    input.setAttribute('placeholder', normalizedName);

    input.parentNode.insertBefore(label, input);
  });
});
