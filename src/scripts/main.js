'use strict';

const textFields = document.querySelectorAll('.field-text');

for (let i = 0; i < textFields.length; i++) {
  const lab = document.createElement(`label`);

  lab.classList.add(`field-label`);

  lab.setAttribute(`for`, textFields[i].id);
  lab.textContent = textFields[i].name;
  textFields[i].parentElement.insertBefore(lab, textFields[i]);
  textFields[i].setAttribute(`placeholder`, textFields[i].name);
}
