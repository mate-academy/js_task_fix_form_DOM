'use strict';

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        const label = document.createElement('label');
        label.setAttribute('for', input.id);
        label.setAttribute('class', 'field-label');
        label.textContent = input.name.toUpperCase();

        input.setAttribute('placeholder', input.name.charAt(0).toUpperCase() + input.name.slice(1));
        input.parentNode.insertBefore(label, input);
    });
});
