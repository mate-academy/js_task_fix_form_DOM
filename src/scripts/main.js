'use strict';

function getInputs() {
  return [...document.querySelectorAll('form input')];
}

function createLabels(list) {
  const usedIds = [];
  let indx = 1;

  list.forEach((input) => {
    if (!usedIds.includes(input.id)) {
      const label = document.createElement('label');
      const placeHolderText = input.name.toLowerCase().split('');

      placeHolderText[0] = placeHolderText[0].toUpperCase();

      if (input.id === '') {
        const base = input.name.trim() ? input.name.trim() : 'field';

        input.id = `input-${base}-${indx}`;
        indx += 1;
      }

      input.parentNode.appendChild(label);

      if (input.name) {
        input.setAttribute('placeholder', placeHolderText.join(''));
      }

      label.setAttribute('for', input.id);
      label.innerText = input.name;
      label.classList.add('field-label');

      usedIds.push(input.id);
    }
  });
}

createLabels(getInputs());
