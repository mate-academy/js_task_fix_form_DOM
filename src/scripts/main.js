"use strict";

// write code here
const inputs = document.querySelectorAll("form input");

for (const input of inputs) {
  const label = document.createElement("label");

  label.className = "field-label";
  label.htmlFor = input.id;
  label.textContent = input.name
    // insert a space before all caps
    .replace(/([A-Z])/g, " $1")
    .toUpperCase();
  input.insertAdjacentElement("beforebegin", label);
  input.placeholder = input.name
    // insert a space before all caps
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });
}
