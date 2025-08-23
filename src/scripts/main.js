'use strict';

function textParser(text) {
  let parsText = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[i].toUpperCase()) {
      parsText += text[i];
    } else {
      parsText += ' ' + text[i];
    }
  }
  parsText = parsText[0].toUpperCase() + parsText.slice(1);

  return parsText;
}

const inputList = document.querySelectorAll('input');

inputList.forEach((element) => {
  const inputLablel = document.createElement('label');

  inputLablel.classList.add('field-label');

  inputLablel.setAttribute('for', element.getAttribute('id'));

  element.after(inputLablel);

  inputLablel.textContent = textParser(element.getAttribute('name'));

  element.setAttribute('placeholder', textParser(element.getAttribute('name')));
});
