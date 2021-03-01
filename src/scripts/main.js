'use strict';

const inputs = document.querySelectorAll('input');

function formatingText(text) {
  const splitText = text.split('');

  splitText[0] = splitText[0].toUpperCase();

  for (let i = 1; i < splitText.length; i++) {
    if (splitText[i] === splitText[i].toUpperCase()) {
      splitText.splice(i, 0, ' ');
      i++;
    }
  }

  return splitText.join('');
};

[...inputs].forEach(element => {
  element.placeholder = formatingText(element.name);

  element.insertAdjacentHTML('beforebegin', `
    <label
      for="${element.id}"
      class="field-label"
    >
      ${formatingText(element.name)}
    </label>
  `);
});
