'use strict';

const firstName = document.getElementById('sign-up-name');
const lastName = document.getElementById('sign-up-last-name');
const emailSignUp = document.getElementById('sign-up-email');
const emailSignIn = document.getElementById('sign-in-email');
const passwordSignUp = document.getElementById('sign-up-password');
const passwordSignIn = document.getElementById('sign-in-password');

const changeList = [
  {
    element: firstName, text: 'First Name', id: 'sign-up-name',
  },
  {
    element: lastName, text: 'Last Name', id: 'sign-up-last-name',
  },
  {
    element: emailSignUp, text: 'Email', id: 'sign-up-email',
  },
  {
    element: emailSignIn, text: 'Email', id: 'sign-in-email',
  },
  {
    element: passwordSignUp, text: 'Password', id: 'sign-up-password',
  },
  {
    element: passwordSignIn, text: 'Password', id: 'sign-in-password',
  },
];

for (const form of changeList) {
  form.element.placeholder = form.text;

  form.element.parentElement.insertAdjacentHTML('afterbegin',
    `
    <label for="${form.id}" class="field-label" >${form.text}</label>
    `
  );
}
