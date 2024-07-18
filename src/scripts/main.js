'use strict';

const inputs = document.querySelectorAll('input');
const labelObj = Array.from(inputs).map((input) => ({
  name: input.getAttribute('name'),
  id: input.getAttribute('id'),
}));

labelObj.forEach((forLabel, index) => {
  const label = document.createElement('label');

  label.textContent = forLabel.name;
  label.setAttribute('for', forLabel.id);
  label.setAttribute('class', 'field-label');

  inputs[index].parentNode.insertBefore(label, inputs[index]);

  inputs[index].setAttribute(
    'placeholder',
    forLabel.name[0].toUpperCase() + forLabel.name.slice(1),
  );
});
