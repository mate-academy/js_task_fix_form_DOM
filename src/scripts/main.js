/* eslint-disable quotes */
"use strict";

const inputs = document.querySelectorAll("input");

[...inputs].forEach((input) => {
  const label = document.createElement("label");

  input.placeholder = input.name.toUpperCase();
  label.className = `field-label`;
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.before(label);
});
