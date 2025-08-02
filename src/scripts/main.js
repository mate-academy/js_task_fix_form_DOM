'use strict';

// write code here
document.querySelectorAll('form input').forEach(function (element) {
  const name1 = element.name.charAt(0).toUpperCase() + element.name.slice(1);

  element.setAttribute('placeholder', name1);

  const label = document.createElement('label');

  label.textContent = name1;
  label.setAttribute('for', element.id);
  element.parentNode.prepend(label);
});
