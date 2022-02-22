'use strict';

const inputsCollection = document.querySelectorAll('input');

for (const elem of inputsCollection) {
  const labelForInput = document.createElement('label');
  const parentElem = elem.parentNode;

  labelForInput.className = 'field-label';

  let nextWordIndex = null;

  // the code below would work correct only for the name,
  // which consist of one or two words
  // in other cases a universal function is required
  // const labelTextArray = elem.name.split('');

  for (let i = 0; i < elem.name.length; i++) {
    if (elem.name[i].toUpperCase() === elem.name[i]) {
      nextWordIndex = i;
    }
  }

  let text = '';

  if (nextWordIndex) {
    text = elem.name.slice(0, nextWordIndex)
    + ' ' + elem.name.slice(nextWordIndex);
  } else {
    text = elem.name.toUpperCase();
  }

  labelForInput.setAttribute('for', elem.id);
  parentElem.prepend(labelForInput);

  labelForInput.textContent = text.toUpperCase();

  elem.setAttribute('placeholder',
    text[0].toUpperCase() + text.slice(1));
}
