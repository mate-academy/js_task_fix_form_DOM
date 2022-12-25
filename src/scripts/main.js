'use strict';

const element = document.querySelector('form');
const formElements = Array.from(element.elements);

formElements.forEach(el => {
  el.setAttribute('placeholder', `${el.name}`);

  const label = document.createElement('label');

  label.setAttribute('for', 'sign-up-name');
  label.setAttribute('class', 'field-label');
  label.textContent = `${el.name}`;
  el.append(label);
});
