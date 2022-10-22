'use strict';

const inputs = document.querySelectorAll('input');
const field = document.querySelectorAll('.field');

const newInputs = [...inputs].map(input => `
<label for="${input.id}">
${input.name.toUpperCase()}
</label>
<input type="${input.type}"
name="${input.name}"
class="field-label"
id="${input.id}"
placeholder="${input.name[0].toUpperCase()}${input.name.slice(1)}"
autocomplete="${input.autocomplete}">
`);

for (let i = 0; i < newInputs.length; i++) {
  field[i].innerHTML = newInputs[i];
};
