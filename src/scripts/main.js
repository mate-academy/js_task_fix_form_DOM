'use strict';

// const nameInput = document.getElementById('sign-up-name');
// const lastNameInput = document.getElementById('sign-up-last-name');
// const passwordInput = document.getElementById('sign-up-password');
// const emailInput = document.getElementById('sign-in-email');

// const signInEmail = document.getElementById('sign-in-email');
// const signInPasswordInput = document.getElementById('sign-in-password');

const allFormInputs = Array.from(document.getElementsByTagName('input'));

function createLabel(inputs) {
  inputs.forEach((item) => {
    const label = document.createElement('label');

    label.htmlFor = item.id;
    label.setAttribute('class', 'field-label');
    label.textContent = item.name;
    item.placeholder = item.name.toUpperCase();
    item.parentElement.appendChild(label)
  });
}

createLabel(allFormInputs);
