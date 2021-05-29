'use strict';

function addingLabel(element) {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.textContent = `${element.name}`;
  newLabel.for = element.id;

  element.placeholder = `${element.name.charAt(0).toUpperCase()
  + element.name.slice(1)}`; // Capitalizing & setting placeholder
  element.parentElement.append(newLabel);
}

Array.from(document.querySelectorAll('input')).map(node => {
  addingLabel(node);
});
