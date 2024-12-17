'use strict';

const inputs = document.querySelectorAll('input');

// For each input element create element label
// with class field-label (it is needed to apply css styles)
// and for attribute where set id of current input.
// Set textContent for label rely on input name.

inputs.forEach((input) => {
  // add label
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);

  // add placeholder
  // For each input set placeholder based on input name. Capitalize it.

  input.setAttribute(
    'placeholder',
    String(input.name)[0].toUpperCase() + String(input.name).slice(1),
  );
});
