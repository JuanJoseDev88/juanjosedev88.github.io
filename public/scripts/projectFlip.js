// Toggle .is-flipped on click / keyboard (Enter / Space). Manage aria-pressed and Escape to close.
(function () {
  function toggleFlip(card) {
    const isFlipped = card.classList.toggle('is-flipped');
    try { card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false'); } catch (e) {}
  }

  function closeFlip(card) {
    if (card.classList.contains('is-flipped')) {
      card.classList.remove('is-flipped');
      try { card.setAttribute('aria-pressed', 'false'); } catch (e) {}
    }
  }

  function init() {
    const cards = Array.from(document.querySelectorAll('.project-card.flip-card'));
    if (!cards.length) return;

    cards.forEach(card => {
      // Click/tap toggles
      card.addEventListener('click', (e) => {
        // Only toggle when clicking the card itself (not selecting links inside)
        const targetIsLink = e.target.closest('a');
        if (targetIsLink) return;
        toggleFlip(card);
      });

      // Keyboard: Enter/Space toggles, Escape closes
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip(card);
        } else if (e.key === 'Escape') {
          closeFlip(card);
        }
      });

      // Close when clicking outside the flipped card
      document.addEventListener('click', (e) => {
        if (!card.contains(e.target) && card.classList.contains('is-flipped')) {
          closeFlip(card);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
