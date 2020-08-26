'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = spliter(input.name);
  input.parentElement.prepend(label);

  input.placeholder = spliter(input.name);
});

function spliter(str) {
  let res = str;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter === letter.toUpperCase()) {
      res = res.slice(0, i) + ' ' + res.slice(i);
    }
  }

  return res[0].toUpperCase() + res.slice(1);
}
