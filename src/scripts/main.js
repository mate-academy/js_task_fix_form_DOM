'use strict';

const result = document.querySelectorAll('.field');

for (let a = 0; a < result.length; a++) {
  const selector = result[a].querySelector('.field-text');
  const placeholder = selector.name[0]
    .toUpperCase() + selector.name
    .slice(1)
    .replace(/([A-Z][a-z]+)/g, ' $1 ')
    .trim();

  result[a].insertAdjacentHTML('afterbegin', `
  <label for="${selector.id}" class = "field-label">${placeholder}</label>
  `);

  selector.placeholder = placeholder;
}
