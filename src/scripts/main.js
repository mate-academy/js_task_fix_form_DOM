'use strict';

// беремо ВСІ форми на сторінці
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  // беремо input ТІЛЬКИ всередині конкретної форми
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    // створюємо label
    const label = document.createElement('label');

    label.classList.add('field-label');

    // прив’язка через id
    label.setAttribute('for', input.id);

    // текст із name (з великої літери)
    const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    label.textContent = text;

    // placeholder
    input.placeholder = text;

    // вставляємо label перед input
    input.parentElement.prepend(label);
  });
});
