'use strict';

const fields = document.getElementsByClassName('field');

for (const field of fields) {
  const fieldText = field.querySelector('.field-text');
  const fieldName = /[A-Z]/.test(fieldText.name)
    ? toSplitString(fieldText.name, /[A-Z]/)
    : fieldText.name;

  field.insertAdjacentHTML('afterbegin',
    `<label class="field-label" for="${fieldText.id}">
            ${fieldName.toUpperCase()}
    </label>`
  );

  fieldText.placeholder = fieldName[0].toUpperCase() + fieldName.slice(1);
};

function toSplitString(str, separator) {
  const index = str.indexOf(str.match(separator));

  return `${str.slice(0, index)} ${str.slice(index)}`;
}
