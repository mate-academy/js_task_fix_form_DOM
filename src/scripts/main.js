'use strict';

const capitalise = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const inputs = document.querySelectorAll('.field input');

// My solution
// for (let i = 0; i < inputs.length; i++) {
//   const inputName = inputs[i].getAttribute('name');
//   const capitalisedName = capitalise(inputName, true);
//   inputs[i].setAttribute('placeholder', capitalisedName);
//   const label = document.createElement('label');
//   label.classList.add('field-label');
//   label.setAttribute('for', inputs[i].id); // or label.htmlFor = inputs[i].id
//   label.innerText = capitalisedName;
//   inputs[i].before(label);
// }

// Alternative solution
for (const input of inputs) {
  const inputName = input.getAttribute('name');
  const capitalisedName = capitalise(inputName, true);
  input.setAttribute('placeholder', capitalisedName);
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', input.id); // or label.htmlFor = input.id
  label.innerText = capitalisedName;
  input.before(label);
}
