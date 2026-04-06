'use strict';

const inputs = form.querySelectorAll('input');
inputs.forEach(b => {
  if (!b.id) {
    b.id = b.name;
  }
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', b.id);
  label.textContent = b.name;
  b.placeholder = b.name.charAt(0).toUpperCase() + b.name.slice(1);
  b.parentNode.appendChild(label);
});
