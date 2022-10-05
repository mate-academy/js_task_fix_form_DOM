'use strict';

function addCaps(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const parents = document.getElementsByClassName('field');

[...parents].map(div => {
  const label = document.createElement('label');
  const input = div.children[0];

  label.htmlFor = input.id;
  label.textContent = input.name;
  label.className = 'field-label';
  input.placeholder = addCaps(input.name);

  div.append(label);
});
