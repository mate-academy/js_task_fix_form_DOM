'use strict';

(function initWhenReady() {
  if (typeof document === 'undefined') {
    return;
  }

  function runn() {
    const form = document.querySelector('form');

    if (!form) {
      return;
    }

    const inputs = form.querySelectorAll('input');
    const skip = new Set([
      'submit',
      'reset',
      'hidden',
      'file',
      'checkbox',
      'radio',
      'button',
    ]);

    inputs.forEach((input, index) => {
      const type = (input.type || '').toLowerCase();

      if (skip.has(type)) {
        return;
      }

      const names = (input.name || '').trim();

      if (!names) {
        return;
      }

      if (!input.id) {
        const base = names
          .toLowerCase()
          .replace(/[\s_]+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');

        let id = base || `field-${index + 1}`;
        let n = 1;

        while (document.getElementById(id)) {
          id = `${base || 'field'}-${index + 1}-${n++}`;
        }
        input.id = id;
      }

      const pretty = names
        .split(/[-_\s]+/)
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = pretty;

      input.placeholder = pretty;

      input.parentNode.appendChild(label);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runn);
  } else {
    runn();
  }
})();
