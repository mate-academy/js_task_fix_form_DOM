'use strict';

const inputs = document.querySelectorAll('input');

function formatingText(text) {
  let splitText = text.split('');
  let i = splitText.findIndex(el => el === el.toUpperCase());

  while (i > 0) {
    splitText[i] = splitText[i].toLowerCase();
    splitText.splice(i, 0, ' ');
    i = splitText.findIndex(el => el === el.toUpperCase() && el !== ' ');
  }

  splitText = splitText.join('').split(' ');

  splitText = splitText.map(word => {
    const wordArr = word.split('');

    wordArr[0] = wordArr[0].toUpperCase();

    return wordArr.join('');
  });

  return splitText.join(' ');
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
