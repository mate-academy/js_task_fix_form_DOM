'use strict';

const inputs = document.querySelectorAll('input');

for (const key of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = key.id;
  label.textContent = wordSeparator(key.name);
  key.placeholder = wordSeparator(key.name);
  key.append(label);
}

function wordSeparator(string) {
  const phrase = string.split('');

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toUpperCase() === phrase[i]) {
      phrase[i] = ' ' + phrase[i];
    }
  }

  return phrase[0].toUpperCase() + phrase.join('').slice(1);
}
