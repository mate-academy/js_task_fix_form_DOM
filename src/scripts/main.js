'use strict';

const inputs = document.querySelectorAll('form input');

for (const thisInput of inputs) {
  thisInput.parentElement.insertAdjacentHTML('beforeend', `
    <label class="field-label" for="${thisInput.id}">
    ${thisInput.name}
    </label>
  `);

  const placeFirstChar = thisInput.name[0].toUpperCase();
  const placeOtherChars = thisInput.name.slice(1).toLowerCase();

  thisInput.setAttribute('placeholder', placeFirstChar + placeOtherChars);
}
