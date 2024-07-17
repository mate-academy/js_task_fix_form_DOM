'use strict';

document.querySelectorAll('input').forEach((el) => {
  const label = document.createElement('label');
  label.className = 'field-label';
  label.setAttribute('for', el.id);
  el.before(label);
  const textContent = el
    .getAttribute('name')
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLocaleLowerCase();
  label.textContent = textContent;
  const capitalText = textContent[0].toUpperCase() + textContent.slice(1);
  el.placeholder = capitalText;
});
