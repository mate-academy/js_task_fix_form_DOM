'use strict';

function addCaps(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const parents = document.getElementsByClassName('field');

[...parents].map(div => {
  const label = document.createElement('label');
  const input = div.children[0];
  const splitedName = input.name
    .replace(/([a-z])([A-Z])/g, '$1 $2');

  label.htmlFor = input.id;
  label.textContent = splitedName;
  label.className = 'field-label';
  input.placeholder = addCaps(splitedName);

  div.append(label);
});
