'use strict';

const inputElements = document.querySelectorAll('form input');

inputElements.forEach((el) => {
  const labelElement = document.createElement('label');
  const nameAttribute = el.getAttribute('name');
  const capitalizedName =
    nameAttribute.charAt(0).toUpperCase() + nameAttribute.slice(1);

  labelElement.className = 'field-label';
  labelElement.textContent = capitalizedName;
  labelElement.setAttribute('for', el.id);
  el.setAttribute('placeholder', capitalizedName);
  el.parentNode.insertBefore(labelElement, el);
});
