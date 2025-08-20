// Handles flip card interaction: click to flip, Enter/Space to toggle for keyboard users
(function () {
  function toggleFlip(card) {
    const isFlipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
  }

  function init() {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
      card.addEventListener('click', () => toggleFlip(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip(card);
        } else if (e.key === 'Escape' && card.classList.contains('is-flipped')) {
          // close on escape
          toggleFlip(card);
        }
      });

      // Optional: close when clicking outside
      document.addEventListener('click', (e) => {
        if (!card.contains(e.target) && card.classList.contains('is-flipped')) {
          card.classList.remove('is-flipped');
          card.setAttribute('aria-pressed', 'false');
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
