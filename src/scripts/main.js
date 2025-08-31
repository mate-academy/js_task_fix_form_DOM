'use strict';

const inputElements = [...document.querySelectorAll('input')];

inputElements.forEach((el) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', el.id);
  newLabel.textContent = el.name;

  const placeholderText = el.name.charAt(0).toUpperCase() + el.name.slice(1);

  el.setAttribute('placeholder', placeholderText);

  el.before(newLabel);
});

// const inputs = document.querySelectorAll('form input');

// for (const input of inputs) {
//   const label = document.createElement('label');

//   label.classList.add('field-label');

//   if (!input.id) {
//     input.id = 'sign-in-' + input.name;
//   }

//   label.setAttribute('for', input.id);
//   label.textContent = input.name;

//   input.before(label);

//   const placeholderText = input.name[0].toUpperCase() + input.name.slice(1);

//   input.setAttribute('placeholder', placeholderText);
// }
