'use strict';

const input = [...document.getElementsByTagName('input')];

function createLabelForInput() {
  const labels = input.map((value) => {
    const labelName = value.name;
    let labelNameToUpperCase = '';

    for (const l of labelName) {
      if (l === l.toUpperCase()) {
        labelNameToUpperCase += ' ';
      }
      labelNameToUpperCase += l;
    }

    const labelId = value.id;

    const labelClass = 'field-label';

    const newLabel = document.createElement('label');

    newLabel.classList.add(labelClass);

    newLabel.htmlFor = labelId;
    newLabel.textContent = labelNameToUpperCase;
    value.insertAdjacentElement('beforebegin', newLabel);

    return newLabel;
  });

  return labels;
}

function createPlaceholderForInput() {
  const placeholder = input.map((value) => {
    const placeholderName = value.name;
    let placeholderToUpperCase = '';

    for (const p of placeholderName) {
      if (p === p.toUpperCase()) {
        placeholderToUpperCase += ' ';
      }
      placeholderToUpperCase += p;
    }

    const placeholderUpdate =
      placeholderToUpperCase.charAt(0).toUpperCase() +
      placeholderToUpperCase.slice(1);

    value.placeholder = placeholderUpdate;

    return placeholderUpdate;
  });

  return placeholder;
}

createLabelForInput();
createPlaceholderForInput();
