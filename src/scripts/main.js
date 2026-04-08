'use strict';

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    /* eslint-disable-next-line no-shadow */
    const { name, id } = input;
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = id;
    label.innerText = name;

    input.setAttribute(
      'placeholder',
      name[0].toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1'),
    );
    input.before(label);
  });
});
