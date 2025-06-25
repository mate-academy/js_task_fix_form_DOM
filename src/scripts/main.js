'use strict';

const forms = document.querySelectorAll('form input');

forms.forEach( input => {
const label = document.createElement('label');
label.classList.add('field-label');

label.setAttribute('for', input.id);

const upper = input.name.charAt(0).toUpperCase() + input.name.slice(1);
label.textContent = upper;

input.placeholder = upper;

input.parentNode.insertBefore(label, input);
});


