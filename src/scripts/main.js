'use strict';

// Helper function to capitalize string
function capitalizeFirstLetter(str) {
  if (!str) {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createLabel(inputEl) {
  const label = document.createElement('label');

  // Set label attributes
  label.classList.add('field-label');
  label.setAttribute('for', inputEl.id);
  label.textContent = inputEl.name;

  inputEl.parentNode.insertBefore(label, inputEl);
}

function setPlaceholder(inputEl) {
  inputEl.setAttribute('placeholder', capitalizeFirstLetter(inputEl.name));
}

const inputElements = [...document.getElementsByTagName('input')];

inputElements.forEach((el) => {
  createLabel(el);
  setPlaceholder(el);
});
