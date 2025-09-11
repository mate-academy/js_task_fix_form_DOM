'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("form input");

  inputs.forEach((input, idx) => {
    const name = input.getAttribute("name");
    if (!name) return;

    // --- 1) Ensure valid, unique id ---
    if (!input.id) {
      let baseId = name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // spaces → dashes
        .replace(/[^a-z0-9\-_:.]/g, ""); // strip invalid chars

      if (!baseId) baseId = "input"; // fallback if nothing left

      let uniqueId = baseId;
      let counter = 1;
      while (document.getElementById(uniqueId)) {
        uniqueId = `${baseId}-${counter++}`;
      }

      input.id = uniqueId;
    }

    // --- 2) Capitalize nicely for label/placeholder ---
    const capitalized =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    // --- 3) Create label ---
    const label = document.createElement("label");
    label.classList.add("field-label");
    label.setAttribute("for", input.id);
    label.textContent = capitalized;

    // --- 4) Add placeholder ---
    input.placeholder = capitalized;

    // --- 5) Append label to the parent container ---
    input.parentElement.appendChild(label);
  });
});


