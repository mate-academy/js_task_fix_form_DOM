'use strict';

const inputElements = [...document.querySelectorAll('input')];

inputElements.forEach((element) => {
  const words = element.name.split(/(?=[A-Z])/);

  words[0] = words[0][0].toUpperCase() + words[0].slice(1);

  const splittedName = words.join(' ');

  element.setAttribute('placeholder', splittedName);

  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', element.id);
  label.textContent = splittedName.toUpperCase();

  element.before(label);
});
