'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

inputs.forEach((i) => {
  const newLabel = document.createElement('label');
  const capitalizedName = i.name.charAt(0).toUpperCase() + i.name.substring(1);

  newLabel.classList.add('field-label');
  newLabel.textContent = capitalizedName;

  if (i.id) {
    newLabel.setAttribute('for', i.id);
  }

  i.setAttribute('placeholder', capitalizedName);

  i.before(newLabel);
});
