'use strict';

// write code here
const forms = document.querySelectorAll('form');

for (const form of forms) {
  const children = form.querySelectorAll('.field');

  for (const ch of children) {
    const id = ch.firstElementChild.id;
    const nameText = ch.firstElementChild.name;
    const label = document.createElement('label');

    label.htmlFor = id;
    label.className = 'field-label';
    label.textContent = nameText.toUpperCase();

    ch.firstElementChild.placeholder = nameText[0].toUpperCase()
    + nameText.slice(1);
    ch.firstElementChild.before(label);
  }
}
