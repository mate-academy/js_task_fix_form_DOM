'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.forEach(field => {
  field.insertAdjacentHTML(
    'afterbegin',
    `
    <label class="field-label" for="${field.children[0].id}">
      ${field.children[0].name}
    </label>
  `
  );

  field.children[1].placeholder
    = field.children[1].name.toUpperCase()[0]
    + field.children[1].name.slice(1);
});

const firstName = document.querySelector('[name="firstName"]');
const lastName = document.querySelector('[name="lastName"]');
const firstNameLabel = document.querySelector('[for="sign-up-name"]');
const lastNameLabel = document.querySelector('[for="sign-up-last-name"]');

firstName.placeholder = 'First Name';
lastName.placeholder = 'Last Name';
firstNameLabel.innerText = 'first name';
lastNameLabel.innerText = 'last name';
