'use strict';

const inputs = [...document.querySelectorAll("input")];
const parents = [...document.querySelectorAll(".field")];

for (let i = 0; i < inputs.length; i++) {
  const names = inputs[i].name;
  const textContent = names.toUpperCase();
  const labelFor = inputs[i].id;
  const firstLetter = names.charAt(0).toUpperCase();
  const placeholders = firstLetter + names.slice(1);

  inputs[i].setAttribute('placeholder', placeholders.replace(/N/g, ' N'));

  parents[i].innerHTML += `
    <label
      class="field-label"
      for="${labelFor}"
    >
      ${textContent.replace(/N/g, ' N')}
    </label>`;
}
