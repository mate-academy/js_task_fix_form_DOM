'use strict';

const inputs = document.querySelectorAll('input');

for (const element of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';

  const id = element.getAttribute('id');

  label.htmlFor = id;

  const elemName = element.getAttribute('name');

  label.textContent = elemName;

  element.setAttribute('placeholder', elemName[0].toUpperCase()
    + elemName.slice(1));

  element.parentElement.append(label);
}
