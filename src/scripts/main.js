'use strict';

const inputs = document.querySelectorAll('input');
const inputsArr = [...inputs];

inputsArr.forEach(input => {
  const labels = document.createElement('label');

  labels.className = 'field-label';
  labels.htmlFor = input.id;
  labels.textContent = rewriteToText(input.name);

  input.placeholder = rewriteToText(input.name);

  input.parentElement.prepend(labels);
});

function rewriteToText(text) {
  const result = text.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
}
