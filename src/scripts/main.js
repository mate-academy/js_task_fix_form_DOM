'use strict';

const inputArray = Array.from(document.querySelectorAll('.field-text'));

inputArray.forEach(element => {
  const labelName = element.name.replace(
    /([A-Z])/g, ' $1'
  ).toLowerCase().replace(
    /^./, firstLeter => firstLeter.toUpperCase()
  );

  element.insertAdjacentHTML(
    'beforebegin',
    `<label
      class="field-label"
      for="${element.id}"
    >${labelName}</label>`
  );

  element.setAttribute('placeholder', labelName);
});
