'use strict';

const ul = document.querySelectorAll('input');

for (const key of ul) {
  key.placeholder = key.name
    .replace(/\w/, firstLetter => firstLetter.toUpperCase());

  const lb = document.createElement('label');

  lb.className = 'field-label';

  lb.htmlFor = key.id;

  key.parentElement.append(lb);
};
