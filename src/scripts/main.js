'use strict';

const forms = document.querySelectorAll('form');

function formatText(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    const char = str[i];

    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += ' ';
    }

    result += char;
  }

  return result;
}

for (let i = 0; i < forms.length; i++) {
  const inputs = forms[i].querySelectorAll('input');

  for (let j = 0; j < inputs.length; j++) {
    const parentEl = inputs[j].parentElement;
    const text = inputs[j].name;
    const id = inputs[j].id;
    const label = document.createElement('label');

    label.setAttribute('for', id);
    label.className = 'field-label';
    label.textContent = text;
    inputs[j].placeholder = formatText(text);
    parentEl.prepend(label);
  }
}
