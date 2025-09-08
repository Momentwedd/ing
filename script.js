document.getElementById('year').textContent = new Date().getFullYear();

// Demo form handler
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  alert(`Merci !\n\nNom: ${data.name || ''}\nEmail: ${data.email}\nTéléphone: ${data.phone || ''}\nMessage: ${data.message}`);
  form.reset();
});
