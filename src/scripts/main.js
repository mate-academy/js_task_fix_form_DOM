'use strict';

const listInputs = [...document.querySelectorAll('input')];

for (let i = 0; i < listInputs.length; i++) {
  const label = document.createElement('label');
  const textContent = listInputs[i]
    .getAttribute('name')
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLocaleLowerCase();

  const capitalText = textContent[0].toUpperCase() + textContent.slice(1);
  const text = document.createTextNode(capitalText);
  const getAttibute = listInputs[i].getAttribute('id');

  label.appendChild(text);
  label.classList.add('field-label');
  label.setAttribute('for', getAttibute);
  listInputs[i].setAttribute('placeholder', capitalText);
  listInputs[i].insertAdjacentElement('beforebegin', label);
}
