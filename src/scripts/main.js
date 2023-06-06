'use strict';

const inputs = document.querySelectorAll('input');

const label = document.createElement('label');

for (const item of inputs) {
  item.placeholder = separate(item.name)[0].toUpperCase()
  + separate(item.name).slice(1);

  label.htmlFor = item.id;
  label.textContent = separate(item.name).toUpperCase();
  label.className = 'field-label';

  item.before(label.cloneNode(true));
}

function separate(nameAtribute) {
  let result = nameAtribute;

  for (const char of result) {
    if (char.toUpperCase() === char) {
      result = result.replace(char, ` ${char}`);
    }
  }

  return result;
}
