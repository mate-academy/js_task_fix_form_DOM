'use strict';

const fieldsArray = Array.from(document.querySelectorAll('.field'));

fieldsArray.map((field) => {
  const input = field.querySelector('input');
  const inputName = input.name;

  if (input) {
    const label = document.createElement('label');

    switch (inputName) {
      case 'firstName':
        label.innerText = 'First name';
        input.placeholder = 'First name';
        break;
      case 'lastName':
        label.innerText = 'Last name';
        input.placeholder = 'Last name';
        break;
      case 'email':
        label.innerText = 'Email';
        input.placeholder = 'Email';
        break;
      case 'password':
        label.innerText = 'Password';
        input.placeholder = 'Password';
        break;
    }

    label.setAttribute('for', input.id);
    label.classList.add('field-label');

    field.prepend(label);
  }
});
