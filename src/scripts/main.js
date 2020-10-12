'use strict';

const inputs = document.querySelectorAll('input');

function addLabelsAndPlaceholders(collection) {
  for (const input of collection) {
    const capitalizedName = input.name.replace(/([A-Z])/g, ' $1');

    input.placeholder = capitalizedName.charAt(0).toUpperCase()
      + capitalizedName.slice(1);

    const label = document.createElement('label');

    label.for = input.id;
    label.classList.add('field-label');
    label.textContent = input.name.toUpperCase();
    input.replaceWith(label, input);
  }
}

addLabelsAndPlaceholders(inputs);
