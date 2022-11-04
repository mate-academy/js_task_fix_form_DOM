'use strict';

const inputs = document.querySelectorAll('form input');
// const signUpForm = forms[0];
// const signInForm = forms[1];

// console.log(signUpForm);

const label = document.createElement('label');

label.className = 'field-label';

for (const input of inputs) {
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.closest('.field').prepend(label.cloneNode(true));
}
