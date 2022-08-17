'use strict';

const form = document.querySelectorAll('form');

for (let i = 0; i < form.length; i++) {
  for (const input of form[i]) {
    const label = document.createElement('label');

    label.classList = `field-label`;

    if (input.getAttribute('name') === 'firstName') {
      label.setAttribute('for', 'sign-up-name');
      label.innerHTML = `First Name`;
      input.setAttribute('placeholder', 'First Name');
    }

    if (input.getAttribute('name') === 'lastName') {
      label.setAttribute('for', 'sign-up-last-name');
      label.innerHTML = `Last Name`;
      input.setAttribute('placeholder', 'Last Name');
    }

    if (input.getAttribute('name') === 'email') {
      label.setAttribute('for', 'sign-up-email');
      label.innerHTML = `Email`;
      input.setAttribute('placeholder', 'Email');
    }

    if (input.getAttribute('name') === 'password') {
      label.setAttribute('for', 'sign-up-password');
      label.innerHTML = `Password`;
      input.setAttribute('placeholder', 'Password');
    }
    input.before(label);
  }
}
