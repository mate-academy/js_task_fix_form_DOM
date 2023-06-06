'use strict';

const inputsList = document.querySelectorAll('input');

[...inputsList].forEach(el => {
  const label = document.createElement('label');
  let text = el.name.slice(0, 1).toUpperCase() + el.name.slice(1);

  if (el.name === 'firstName' || el.name === 'lastName') {
    const indexOfLastName = el.name.indexOf('N');

    text = el.name.slice(0, indexOfLastName)
      + ' ' + el.name.slice(indexOfLastName);
  }

  label.className = 'field-label';
  label.textContent = text;
  label.htmlFor = el.id;

  const placeholderText = text.charAt(0).toUpperCase() + text.slice(1);

  el.setAttribute('placeholder', placeholderText);
  el.before(label);
});
