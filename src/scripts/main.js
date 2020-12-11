'use strict';

const inputs = document.querySelectorAll(`input`);

for (const el of inputs) {
  const label = document.createElement(`label`);

  label.className = `field-label`;
  label.htmlFor = el.id;
  label.textContent = el.name;
  el.parentNode.append(label);

  const placeholderName = el.name[0].toUpperCase() + el.name.slice(1);

  el.setAttribute(`placeholder`, placeholderName);
}
