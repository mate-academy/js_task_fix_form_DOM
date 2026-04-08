'use strict';

if (typeof document !== 'undefined') {
  const INPUT_TYPES_TO_SKIP = new Set(['submit', 'button', 'reset', 'hidden', 'image']);

  const shouldProcessInput = (input) => {
    if (!input || !input.parentNode) return false;
    const fieldName = input.getAttribute('name');
    if (!fieldName || !fieldName.trim()) return false;
    const type = (input.getAttribute('type') || 'text').toLowerCase();
    if (INPUT_TYPES_TO_SKIP.has(type)) return false;
    return true;
  };

  const formatLabelText = (fieldName) => {
    const s = String(fieldName || '').trim();
    if (!s) return 'Field';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const ensureUniqueId = (input) => {
    const rawName = input.getAttribute('name') || 'field';
    const base = `input-${rawName.toString().trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-') || 'field'}`;
    let candidate = base;
    let n = 1;
    while (document.getElementById(candidate)) candidate = `${base}-${n++}`;
    input.id = candidate;
    return candidate;
  };

  const upsertLabelForInput = (input) => {
    const id = input.id || ensureUniqueId(input);
    const text = formatLabelText(input.getAttribute('name'));
    const container = input.parentNode;

    let label = container.querySelector(`label[for="${id}"]`);
    if (!label) {
      label = document.createElement('label');
      label.setAttribute('for', id);
      label.textContent = text;
      label.classList.add('field-label');
      container.appendChild(label);
    } else {
      label.classList.add('field-label');
      label.setAttribute('for', id);
      label.textContent = text;
    }

    input.setAttribute('placeholder', text);
  };

  const allInputs = document.querySelectorAll('form input');
  allInputs.forEach((input) => {
    if (!shouldProcessInput(input)) return;
    upsertLabelForInput(input);
  });
}



