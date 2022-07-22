'use strict';

const formsField = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');

function setLabel(fieldsList) {
  for (let i = 0; i <= fieldsList.length - 1; i++) {
    const labelId = fieldsList[i].childNodes[1].id;
    const textContent = labelId.slice(8).split('-').join('');

    fieldsList[i].innerHTML = `
      <label class="field-label" for="${labelId}" >${textContent}</label>
      ${fieldsList[i].innerHTML}
    `;
  }
}

function setPlaceholder(list) {
  for (let i = 0; i <= list.length - 1; i++) {
    const placeholder = list[i].name.toLowerCase()[0].toUpperCase()
                      + list[i].name.toLowerCase().slice(1);

    list[i].placeholder = placeholder;
  }
}
setPlaceholder(inputs);
setLabel(formsField);
