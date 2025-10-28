document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.project-box');

  boxes.forEach((box) => {
    // // Make the whole card keyboard-activatable like a button
    // box.setAttribute('tabindex', '0');
    // box.setAttribute('role', 'button');
    // box.setAttribute('aria-expanded', 'false');

    // in your existing toggle() inside main.js
    const toggle = () => {
      const img = box.querySelector('.thumb-img');
      if (!img) return;

      const expanded = box.classList.toggle('is-expanded');
      // box.setAttribute('aria-expanded', expanded ? 'true' : 'false');

      // A11y: hide/reveal details for screen readers & tab order
      // const details = box.querySelector('.project-details');
      // const links = details ? details.querySelectorAll('a, button') : [];
      // if (details) details.setAttribute('aria-hidden', expanded ? 'false' : 'true');
      // links.forEach(el => el.tabIndex = expanded ? 0 : -1);
    };
    // Click anywhere in the card EXCEPT links/buttons
    box.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return; // let links/buttons work normally
      toggle();
    });

  });
});