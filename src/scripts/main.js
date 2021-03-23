'use strict';

const result = document.querySelectorAll('.field');

for (let a = 0; a < result.length; a++) {
  const selector = result[a].querySelector('.field-text');
  const placeholder = selector.name[0]
    .toUpperCase() + selector.name.slice(1);

  result[a].insertAdjacentHTML('afterbegin', `
  <label for="${selector.id}" class = "field-label">${selector.name}</label>
  `);

  selector.placeholder = placeholder;
}
