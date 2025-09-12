'use strict';

if (typeof document !== 'undefined') {
  const INPUT_TYPES_TO_SKIP = new Set([
    'submit',
    'button',
    'reset',
    'hidden',
    'image',
  ]);

  function shouldProcessInput(input) {
    if (!input || !input.parentNode) return false;
    const name = input.getAttribute('name');
    if (!name || !name.trim()) return false;
    const type = (input.getAttribute('type') || 'text').toLowerCase();
    if (INPUT_TYPES_TO_SKIP.has(type)) return false;
    return true;
  }

  function formatLabelText(name) {
    const spaced = String(name)
      .replace(/[_-]+/g, ' ')
      .replace(/([a-z\d])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
    if (!spaced) return 'Field';
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  }

  function ensureUniqueId(input) {
    const raw = input.getAttribute('name') || 'field';
    const base = `input-${raw
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-') || 'field'}`;
    let candidate = base;
    let n = 1;
    while (document.getElementById(candidate)) {
      candidate = `${base}-${n++}`;
    }
    input.id = candidate;
    return candidate;
  }

  function upsertLabelForInput(input) {
    const id = input.id || ensureUniqueId(input);
    const text = formatLabelText(input.getAttribute('name'));
    const parent = input.parentNode;
    let label = parent.querySelector(`label.field-label[for="${id}"]`);
    if (!label) {
      label = document.createElement('label');
      label.className = 'field-label';
      label.setAttribute('for', id);
      label.textContent = text;
      parent.appendChild(label);
    } else {
      label.setAttribute('for', id);
      if (!label.textContent || label.textContent.trim() === '') {
        label.textContent = text;
      }
    }
    if (!input.getAttribute('placeholder')) {
      input.setAttribute('placeholder', text);
    }
  }

  const allInputs = document.querySelectorAll('form input');
  allInputs.forEach((input) => {
    if (!shouldProcessInput(input)) return;
    upsertLabelForInput(input);
  });
}



