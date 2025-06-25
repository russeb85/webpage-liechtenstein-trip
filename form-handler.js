document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.textContent = 'Thanks for signing up! We\'ll be in touch soon.';
    message.classList.remove('hidden');
    form.reset();
  });
});
