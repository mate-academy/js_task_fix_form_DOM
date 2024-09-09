'use strict';

// write code here
function camelCaseToReadable(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, function (match) {
      return match.toUpperCase();
    });
}

const pageForms = document.querySelectorAll('form');

function addLabels(forms) {
  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((formInput) => {
      formInput.insertAdjacentHTML(
        'beforebegin',
        '<label class="field-label" for="' +
          formInput.id +
          '">' +
          formInput.name +
          '</label>',
      );

      formInput.placeholder = camelCaseToReadable(formInput.name);
    });
  });
}

addLabels(pageForms);
