'use strict';

const inputs = document.querySelectorAll('form input');
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const ElementBuilder = function (tagName) {
  this.element = document.createElement(tagName);
};

ElementBuilder.createLabelForInput = function (input, idx) {
  const fieldName = input.name || 'field';

  if (!input.id) {
    input.id = `${fieldName}-${idx}`;
  }

  return new ElementBuilder('label')
    .addAttr('for', input.id)
    .addClass('field-label')
    .textContent(capitalize(fieldName)).el;
};

ElementBuilder.prototype = {
  constructor: ElementBuilder,

  addClass: function (className) {
    this.element.classList.add(className);

    return this;
  },

  addAttr: function (attrName, value) {
    this.element.setAttribute(attrName, value);

    return this;
  },

  textContent: function (text) {
    this.element.textContent = text;

    return this;
  },
};

Object.defineProperty(ElementBuilder.prototype, 'el', {
  get: function () {
    return this.element;
  },
  enumerable: false,
  configurable: true,
});

(() => {
  if (!inputs.length) {
    return;
  }

  [...inputs].forEach((input, i) => {
    const label = ElementBuilder.createLabelForInput(input, i);
    const fieldName = input.name || 'field';

    input.placeholder = capitalize(fieldName);
    input.parentElement.insertBefore(label, input);
  });
})();
