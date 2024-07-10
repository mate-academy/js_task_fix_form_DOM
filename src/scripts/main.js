'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((el) => {
  el.setAttribute('placeholder', prepareName(el.name));

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.id);
  label.textContent = prepareName(el.name);

  const inputParent = el.closest('div');

  inputParent.append(label);
});

function prepareName(str) {
  const formattedName = str.split(/(?=[A-Z])/);
  const sentence = formattedName.join(' ').toLowerCase();
  const capitalizedSentence =
    sentence.charAt(0).toUpperCase() + sentence.slice(1);

  return capitalizedSentence;
}
