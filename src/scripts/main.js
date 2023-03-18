'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = input.name;

    input.setAttribute('placeholder',
      input.name[0].toUpperCase()
      + input.name.slice(1)
    );

    const inputParent = input.parentElement;

    inputParent.insertBefore(label, input);

    if (input.type === 'email') {
      input.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');
    }
  });
