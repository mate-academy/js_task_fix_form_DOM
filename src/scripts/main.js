'use strict';

function fixFormLabels(selector) {
  const forms = document.querySelectorAll(selector);

  forms.forEach((item) => {
    const nodeFields = item.querySelectorAll('.field');
    const arrayFields = Array.from(nodeFields);

    addLabelsToFields(arrayFields);
  });
}

const addLabelsToFields = (fieldsList) => {
  fieldsList.forEach((item) => {
    const input = item.children[0];
    const id = input?.id;
    const textLabel = input?.name;
    const createLabel = document.createElement('label');
    const formattedPlaceholder =
      textLabel.charAt(0).toUpperCase() + textLabel.slice(1);

    createLabel.htmlFor = id;
    createLabel.textContent = formattedPlaceholder;
    createLabel.classList.add('field-label');

    input.placeholder = formattedPlaceholder;
    input.before(createLabel);
  });
};

fixFormLabels('form');
