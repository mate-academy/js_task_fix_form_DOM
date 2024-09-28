'use strict';

const forms = document.querySelectorAll('form');

function transformName(typeName) {
  let transformed = typeName;

  if (typeName === 'firstName' || typeName === 'lastName') {
    transformed =
      typeName.slice(0, -4) + ' ' + typeName.slice(-4).toLowerCase();
  }

  return transformed;
}

forms.forEach((form) => {
  const input = form.querySelectorAll('input');

  input.forEach((inputElement) => {
    const lable = document.createElement('label');
    const transformedName = transformName(inputElement.name);

    const inputName =
      transformedName.slice(0, 1).toUpperCase() + transformedName.slice(1);

    inputElement.insertAdjacentElement('beforebegin', lable);

    lable.classList.add('field-label');
    lable.setAttribute('for', inputElement.id);
    lable.textContent = transformName(inputElement.name);

    inputElement.setAttribute('placeholder', inputName);
  });
});
