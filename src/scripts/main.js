'use strict';

// write code here
function correctionOfForm() {
  const inputCollections = document.querySelectorAll('input');

  inputCollections.forEach((inp) => {
    const textLabel = inp.getAttribute('name');

    inp.insertAdjacentHTML(
      'beforebegin',
      `<label for="${inp.id}" class="field-label"></label>`,
    );

    const label = inp.previousElementSibling;

    label.textContent = textLabel;

    inp.name = inp.name.charAt(0).toUpperCase() + inp.name.slice(1);

    inp.setAttribute('placeholder', `${inp.name}`);
  });
}
correctionOfForm();
