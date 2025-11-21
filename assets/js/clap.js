document.addEventListener('DOMContentLoaded', function () {
  const clapButton = document.getElementById('clap-button');
  const clapCountSpan = document.getElementById('clap-count');

  // If this page doesn't have a clap button (home, about, etc.), exit quietly.
  if (!clapButton || !clapCountSpan) {
    return;
  }

  // Use the path as a key so each post has its own count
  const storageKey = 'claps:' + window.location.pathname;

  // Load previous count (if any)
  let count = parseInt(localStorage.getItem(storageKey) || '0', 10);
  if (isNaN(count)) count = 0;

  // Initialize visible count
  clapCountSpan.textContent = count;

  // Increment on click and save
  clapButton.addEventListener('click', function () {
    count += 1;
    clapCountSpan.textContent = count;
    localStorage.setItem(storageKey, String(count));
  });
});
