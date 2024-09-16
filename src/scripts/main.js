'use strict';

const inputFields = document.querySelectorAll('input');

function toSentenceCase(camelCase) {
  const result = camelCase.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1);
};

[...inputFields].forEach(item => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${item.id}`);
  label.textContent = toSentenceCase(`${item.name}`);

  item.placeholder = toSentenceCase(`${item.name}`);

  item.before(label);
});
