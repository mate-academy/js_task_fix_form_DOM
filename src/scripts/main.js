'use strict';

const inputList = document.querySelectorAll('input');

for (const elem of inputList) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', elem.id);

  let labelContent = '';

  if (/[A-Z]/g.test(elem.name)) {
    labelContent = elem.name.replace(/([A-Z])/g, ' $1').split(' ').join(' ');
  } else {
    labelContent = elem.name;
  }

  label.textContent = labelContent;

  elem.before(label);

  const placeholderContent
    = labelContent.replace(/^[a-z]/, (u) => u.toUpperCase());

  elem.setAttribute('placeholder', placeholderContent);
}
