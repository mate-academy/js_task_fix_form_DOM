'use strict';

const formsWrapper = document.querySelector('.login-wrap');
const signUpForm = formsWrapper.firstElementChild;
const signInForm = formsWrapper.lastElementChild;

const fixForm = form => {
  const formInputs = form.querySelectorAll('input');

  for (const inputField of formInputs) {
    const { id: inputId, name: inputName } = inputField;

    const label = document.createElement('label');

    const splittedInputName = splitCamelCase(inputName);

    inputField.setAttribute('placeholder', capitalizeWord(splittedInputName));

    label.className = 'field-label';
    label.htmlFor = inputId;
    label.textContent = splittedInputName;

    inputField.before(label);
  }
};

const splitCamelCase = str => {
  return str.replace(/([A-Z])/g, ' $1').trim();
};

const capitalizeWord = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

fixForm(signUpForm);
fixForm(signInForm);
