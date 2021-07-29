'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const item of inputs) {
  item.placeholder = firstLetterCaps(item.name);

  item.insertAdjacentHTML('beforebegin',
    `<label class='field-label' for=${item.id}>${item.name}</label>`
  );
}

function firstLetterCaps(text) {
  const result = text.toLowerCase();

  return result.charAt(0).toUpperCase() + result.slice(1);
}
