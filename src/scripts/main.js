'use strict';

const bodyElement = document.body;

const allFieldForm1 = bodyElement.querySelectorAll('.field-text');

const fieldWrap = bodyElement.querySelector('.login-wrap');

fieldWrap.style.height = 'fit-content';

// const form1 = Array.from(allFieldForm1).filter(
//   (el) => el.classList.length === 1 && el.classList.contains('field'),
// );

// const allFieldForm2 = bodyElement.querySelectorAll('.field--full');
// const form2 = Array.from(allFieldForm2);

function addPlaceholderAndLabel(list) {
  for (const element of list) {
    const label = document.createElement('label');

    element.before(label);
    label.className = 'field-label';
    label.textContent = element.name.toUpperCase();
    label.style.fontWeight = '700';
    label.style.fontSize = '11px';

    if (element.id) {
      label.setAttribute('for', element.id);
      element.setAttribute('placeholder', element.name);
    }
  }
}

addPlaceholderAndLabel(allFieldForm1);
