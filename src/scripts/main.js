'use strict';

// Helper function to normalize string
function normalizeAndCapitalize(str) {
  if (!str) {
    return '';
  }

  let normalized = str.replace(/[^a-zA-Z0-9]+/g, ' ');

  normalized = normalized.replace(/\s+/g, ' ').trim();

  const capitalized = normalized
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return capitalized;
}

function createLabel(inputEl) {
  const label = document.createElement('label');

  // Set label attributes
  label.classList.add('field-label');
  label.setAttribute('for', inputEl.id);
  label.textContent = normalizeAndCapitalize(inputEl.name);

  inputEl.parentElement.appendChild(label);
}

function setPlaceholder(inputEl) {
  inputEl.setAttribute('placeholder', normalizeAndCapitalize(inputEl.name));
}

const forms = [...document.querySelectorAll('form')];
const inputElements = forms.flatMap((form) => [
  ...form.querySelectorAll('input'),
]);

const ALLOWED_INPUT_TYPES = ['text', 'password', 'email'];
let idCounter = 0;

inputElements.forEach((el) => {
  if (!ALLOWED_INPUT_TYPES.includes(el.type)) {
    return;
  }

  if (!el.name) {
    return;
  }

  if (!el.id) {
    el.id = `generated-id-${idCounter++}`;
  }

  createLabel(el);
  setPlaceholder(el);
});
