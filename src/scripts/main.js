'use strict';

const inputArr = document.querySelectorAll('input');

inputArr.forEach((element) => {
  const nameElemnt = element.getAttribute('name');
  // const id = element.getAttribute('id');

  let changedName = ffui(nameElemnt);

  if (ffui(nameElemnt) !== false) {
    changedName =
      nameElemnt.slice(0, 1).toUpperCase() +
      nameElemnt.slice(1, changedName) +
      ' ' +
      nameElemnt.slice(changedName);
  } else {
    changedName = nameElemnt.slice(0, 1).toUpperCase() + nameElemnt.slice(1);
  }

  element.placeholder = changedName;

  const createlabel = document.createElement('label');

  createlabel.classList.add('field-label');

  createlabel.textContent = changedName;

  createlabel.setAttribute('for', element.id);

  element.parentElement.insertBefore(createlabel, element);
});

function ffui(word) {
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === word[i].toUpperCase() &&
      word[i] !== word[i].toLowerCase()
    ) {
      return i;
    }
  }

  return false;
}
