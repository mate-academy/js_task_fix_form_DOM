'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const el of [...inputs]) {
  el.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${el.id}">
      ${normalize(el.name)}
    </label>
  `);
  el.placeholder = normalize(el.name);
}

function normalize(item) {
  const word = item.split(/(?=[A-Z])/).join(' ');

  return word[0].toUpperCase() + word.slice(1);
}
