'use strict';

const formsCollection = document.forms;

const upgradeInput = function(forms) {
  for (let indx = 0; indx < forms.length; indx++) {
    const form = document.forms[indx].elements;

    for (let innerIndex = 0; innerIndex < form.length; innerIndex++) {
      if (form[innerIndex].tagName === 'INPUT') {
        const placeHolderVal = form[innerIndex].name;

        form[innerIndex].setAttribute('placeholder',
          placeHolderVal.charAt(0).toUpperCase() + placeHolderVal.slice(1));

        const label = document.createElement('label');

        label.htmlFor = form[innerIndex].id;
        label.className = 'field-label';
        label.textContent = placeHolderVal.toUpperCase();
        form[innerIndex].before(label);
      }
    }
  }
};

upgradeInput(formsCollection);
