'use strict';

const dataInputs = document.querySelectorAll('.field-text');

for (let i = 0; i < dataInputs.length; i++) {
  let placeholderValue = dataInputs[i].getAttribute('name');

  const inputParent = dataInputs[i].parentElement;

  const indexOfUpperSymbol = placeholderValue
    .indexOf(placeholderValue.match(/[A-Z]/g));

  if (indexOfUpperSymbol > 0) {
    const firstPart = placeholderValue[0]
      .toUpperCase() + placeholderValue.slice(1, indexOfUpperSymbol);

    const secondPart = placeholderValue
      .slice(indexOfUpperSymbol, placeholderValue.length);

    placeholderValue = `${firstPart} ${secondPart}`;
  } else {
    placeholderValue = placeholderValue[0]
      .toUpperCase() + placeholderValue.slice(1);
  }

  const label = document.createElement('label');

  inputParent.prepend(label);
  label.htmlFor = dataInputs[i].id;
  label.className = 'field-label';
  label.innerText = placeholderValue;

  dataInputs[i].setAttribute('placeholder', `${placeholderValue}`);
}
