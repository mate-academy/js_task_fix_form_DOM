'use strict';

const separate = (param) => {
  switch (param.toLowerCase()) {
    case 'firstname':
    case 'lastname':
      return param.split('Name').join('') + ' Name';
    default:
      return param;
  }
};

[...document.querySelectorAll('input')].forEach((input) => {
  input.placeholder = separate(
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = separate(input.getAttribute('name'));
  label.htmlFor = input.getAttribute('id');

  input.insertAdjacentElement('beforebegin', label);
});
