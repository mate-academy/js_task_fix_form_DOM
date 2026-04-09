'use strict';

function textParser(text) {
  let parsText = '';

  parsText = text[0].toUpperCase() + text.slice(1);

  return parsText;
}

const inputList = document.querySelectorAll('form input');

inputList.forEach((element, index) => {
  const inputLablel = document.createElement('label');

  inputLablel.classList.add('field-label');

  if (element.getAttribute('id')) {
    inputLablel.setAttribute('for', element.getAttribute('id'));
  } else {
    const castomId = `${element.name || 'input'}-${index}`;

    element.id = castomId;
    inputLablel.setAttribute('for', castomId);
  }

  element.before(inputLablel);

  inputLablel.textContent = element.name;

  element.setAttribute('placeholder', textParser(element.getAttribute('name')));
});
