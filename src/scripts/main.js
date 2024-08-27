'use strict';

const inpunts = Array.from(document.querySelectorAll('input'));

inpunts.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name.replace(/([A-Z])/g, ' $1');

  input.parentNode.insertBefore(label, input);

  input.placeholder =
    input.name.charAt(0).toUpperCase() +
    input.name
      .slice(1)
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase();
});
