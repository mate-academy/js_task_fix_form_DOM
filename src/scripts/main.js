'use strict';

const fieldsClasses = document.querySelectorAll('.field');

fieldsClasses.forEach(field => {
  const label = document.createElement('label');

  const inputId = field.lastElementChild;
  let inputIdTitle = '';

  label.htmlFor = inputId.id;

  for (const i of inputId.id) {
    i === '-'
      ? inputIdTitle += ' '
      : inputIdTitle += i;
  };

  const inputName = inputId.name;
  let placeholderName = inputName[0].toUpperCase();

  for (let i = 1; i < inputName.length; i++) {
    inputName[i] === inputName[i].toUpperCase()
      ? placeholderName += ` ${inputName[i].toLowerCase()}`
      : placeholderName += inputName[i];
  }

  label.classList.add('field-label');
  label.innerText = inputIdTitle;

  inputId.setAttribute('placeholder', placeholderName);

  field.prepend(label);
});
