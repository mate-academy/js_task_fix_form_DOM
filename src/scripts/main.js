'use strict';

// Helper function to capitalize string
function capitalizeFirstLetter(str) {
  if (!str) {
    return '';
  }

  const trimmedStr = str.trim();

  return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1).toLowerCase();
}

function createLabel(inputEl) {
  const label = document.createElement('label');

  // Set label attributes
  label.classList.add('field-label');
  label.setAttribute('for', inputEl.id);
  label.textContent = inputEl.name;

  inputEl.parentNode.appendChild(label);
}

function setPlaceholder(inputEl) {
  inputEl.setAttribute('placeholder', capitalizeFirstLetter(inputEl.name));
}

const form = document.querySelector('form');
const inputElements = form ? [...form.querySelectorAll('input')] : [];

let idCounter = 0;

inputElements.forEach((el) => {
  if (!el.name) {
    return;
  }

  if (!el.id) {
    el.id = `generated-id-${idCounter++}`;
  }

  createLabel(el);
  setPlaceholder(el);
});
