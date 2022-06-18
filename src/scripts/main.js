'use strict';

const input = document.querySelectorAll('input');

input[4].placeholder = 'Email';
input[5].placeholder = 'Password';

for (const el of input) {
  el.insertAdjacentHTML(
    'afterend',
    `<label class="field-label" for=""></label>`
  );
}

const label = [...document.querySelectorAll('label')];

label[0].htmlFor = 'sign-up-name';
label[1].htmlFor = 'sign-up-last-name';
label[2].htmlFor = 'sign-up-email';
label[3].htmlFor = 'sign-up-password';
