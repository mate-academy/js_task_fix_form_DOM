'use strict';

const getPlaceholderName = (className) => {
  return className
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');
};

[...document.querySelectorAll('input')].forEach((element) => {
  const placeholder = getPlaceholderName(element.getAttribute('name'));
  const id = element.getAttribute('id');

  element.setAttribute('placeholder', `${placeholder}`);

  element.insertAdjacentHTML(
    'beforebegin',
    `<label class=field-label htmlFor=${id}><strong>${placeholder}</strong></label>`,
  );
});
