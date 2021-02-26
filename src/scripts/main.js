'use strict';

const inputs = document.querySelectorAll('input');

function formatingText(text = 'email') {
  const newText = text.split('');
  const i = newText.findIndex(el => el === el.toUpperCase());

  newText[0] = newText[0].toUpperCase();

  if (i > 0) {
    newText.splice(i, 0, ' ');
  }

  return newText.join('');
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
