'use strict';

const fieldList = [...document.getElementsByClassName('field-text')];

fieldList.forEach((input) => {
  let heading = input.getAttribute('name');

  const label = document.createElement('label');

  input.parentNode.insertBefore(label, input);

  label.setAttribute('class', 'field-label');

  label.id = heading;

  label.textContent = `${heading.toUpperCase()}`;

  heading = heading.charAt(0).toUpperCase() + heading.slice(1);

  input.setAttribute('placeholder', heading);
});
