'use strict';

const formList = document.querySelectorAll('form');

for (const elem of formList) {
  formEdit(elem);
}

function formEdit(form) {
  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {
    const label = document.createElement('label');
    const nameInput = input.getAttribute('name');
    const capitalizeName = nameInput[0].toUpperCase() + nameInput.slice(1);

    label.textContent = input.getAttribute('name');
    label.setAttribute('for', input.getAttribute('id'));
    label.classList.add('field-label');
    input.setAttribute('placeholder', capitalizeName);
    input.before(label);
  }
}
// write code here
