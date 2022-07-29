'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  let text = input.name;

  for (let i = text.length - 1; i >= 0; i -= 1) {
    if (text[i] === text[i].toUpperCase()) {
      text = text.slice(0, i) + ' ' + text.slice(i);
    }
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = text;

  input.placeholder = text[0].toUpperCase()
  + text.slice(1);

  input.parentElement.append(label);
};
// const inputs = document.querySelectorAll('input');

// for (const input of inputs) {
//   let text = input.name;

//   for (let i = text.length - 1; i >= 0; i -= 1) {
//     if (text[i] === text[i].toUpperCase()) {
//       text = text.slice(0, i) + ' ' + text.slice(i);
//     }
//   }

//   input.insertAdjacentHTML('beforebegin',
//     `<label class="field-label"
//     for="${input.id}">${text.toUpperCase()}</label>`);

//   input.setAttribute('placeholder',
//     `${text[0].toUpperCase() + text.slice(1)}`);
// }
