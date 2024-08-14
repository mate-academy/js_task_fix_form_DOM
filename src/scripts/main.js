'use strict';

const input = [...document.getElementsByTagName('input')];

function createLabelForInput() {
  const labels = input.map((value) => {
    const labelName = value.name;

    const labelId = value.id;

    const labelClass = 'field-label';

    const newLabel = document.createElement('label');

    newLabel.classList.add(labelClass);

    newLabel.htmlFor = labelId;
    newLabel.textContent = labelName;
    value.insertAdjacentElement('beforebegin', newLabel);

    return newLabel;
  });

  return labels;
}

function createPlaceholderForInput() {
  const placeholder = input.map((value) => {
    const placeholderName = value.name;

    const placeholderUpdate =
      placeholderName.charAt(0).toUpperCase() + placeholderName.slice(1);

    value.placeholder = placeholderUpdate;

    return placeholderUpdate;
  });

  return placeholder;
}

createLabelForInput();
createPlaceholderForInput();
