'use strict';

const formsWrapper = document.querySelector('.login-wrap');
const signUpForm = formsWrapper.firstElementChild;
const signInForm = formsWrapper.lastElementChild;

const fixForm = form => {
  const formInputs = form.querySelectorAll('input');

  for (const inputField of formInputs) {
    const { id: inputId, name: inputName } = inputField;
    const label = document.createElement('label');

    inputField.setAttribute('placeholder', capitalizeWord(inputName));

    label.className = 'field-label';
    label.htmlFor = inputId;
    label.textContent = inputName;

    inputField.before(label);
  }
};

const capitalizeWord = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

fixForm(signUpForm);
fixForm(signInForm);
