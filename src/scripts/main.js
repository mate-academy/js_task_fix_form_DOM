'use strict';

const inputs = [...document.querySelectorAll('input')];

const formatTagName = (tag) => {
  return tag
    .replace(/[A-Z]/g, (match) => ' ' + match)
    .replace(/^./, (ch) => ch.toUpperCase());
};

inputs.forEach((input) => {
  input.setAttribute('placeholder', formatTagName(input.getAttribute('name')));

  const id = input.getAttribute('id');
  const title = formatTagName(input.getAttribute('name'));
  const label = document.createElement('label');

  label.setAttribute('for', `#${id}`);
  label.classList.add('field-label');

  label.innerText = title;
  input.before(label, document.createElement('br'));
});
