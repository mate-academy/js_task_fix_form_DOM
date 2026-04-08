'use strict';

'use strict';

'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.textContent = input.name;
  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  input.setAttribute(
    'placeholder',
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );

  input.insertAdjacentElement('beforebegin', label);
});
