'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const text = input.name.replace(/name/gi, ' name');

  input.placeholder = text;
  input.style.textTransform = 'capitalize';
  input.parentNode.prepend(label);
  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.style.textTransform = 'uppercase';
  label.innerText = text;
}
