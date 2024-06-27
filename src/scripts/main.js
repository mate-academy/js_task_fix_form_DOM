'use strict';

const forms = document.getElementsByTagName('form');
const separation = (placeholder) => {
  const firstCharCut = placeholder.slice(1);
  let finalParse = '';

  Array.from(firstCharCut).forEach((ch) => {
    if (ch === ch.toUpperCase()) {
      finalParse += ' ';
    }

    finalParse += ch;
  });

  return placeholder.slice(0, 1).toUpperCase() + finalParse;
};

for (let i = 0; i < forms.length; i++) {
  Array.from(forms[i].getElementsByTagName('input')).map((input) => {
    const labelElement = document.createElement('label');

    labelElement.classList.add('field-label');
    labelElement.setAttribute('for', input.id);
    labelElement.textContent = input.name;

    input.parentNode.insertBefore(labelElement, input);

    input.setAttribute('placeholder', separation(input.name));
  });
}
