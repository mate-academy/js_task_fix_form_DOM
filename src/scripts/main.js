'use strict';

document.querySelectorAll('.field-text').forEach((elem) => {
  const nameAttr = elem.getAttribute('name');
  const idAttr = elem.getAttribute('id');
  const lableElement = document.createElement('label');

  lableElement.setAttribute('for', idAttr);
  lableElement.textContent = nameAttr.toUpperCase();
  lableElement.classList.add('field-label');

  elem.setAttribute('placeholder', firstLetterCap(nameAttr));
  elem.before(lableElement);
});

function firstLetterCap(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}
