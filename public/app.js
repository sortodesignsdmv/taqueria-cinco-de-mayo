// Native document links and disclosures keep the complete menu usable without JS.
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) detail.querySelector('summary')?.setAttribute('data-open', 'true');
    else detail.querySelector('summary')?.removeAttribute('data-open');
  });
});

const motionButton = document.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = false;
try { paused = localStorage.getItem('cinco-motion-paused') === 'true'; } catch {}
function updateMotion() {
  const reduced = reducedMotion.matches;
  document.documentElement.dataset.motion = paused || reduced ? 'paused' : 'playing';
  if (!motionButton) return;
  motionButton.hidden = false;
  motionButton.disabled = reduced;
  motionButton.setAttribute('aria-pressed', String(paused || reduced));
  motionButton.textContent = reduced ? 'Reduced motion enabled' : paused ? 'Resume animations' : 'Pause animations';
}
motionButton?.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem('cinco-motion-paused', String(paused)); } catch {}
  updateMotion();
});
reducedMotion.addEventListener('change', updateMotion);
updateMotion();
