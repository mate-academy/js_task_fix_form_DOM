'use strict';

const inputs = document.querySelectorAll('input');
const inputClass = 'field-label';
const firstLatterUp = (word = '') => {
  if (word.length > 0) {
    return (
      word.charAt(0).toUpperCase() + word.slice(1)
    );
  } else {
    return word;
  }
};

[...inputs].forEach(input => {
  const inputId = input.id;
  const inputName = input.name;

  input.insertAdjacentHTML('beforebegin', `
    <label
      class="${inputClass}"
      for="${inputId}"
    >
    ${inputName}
    </label>
  `);

  input.placeholder = firstLatterUp(inputName);
});
