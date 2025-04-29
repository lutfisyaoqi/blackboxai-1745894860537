document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate form submission success
    formMessage.classList.remove('hidden');
    contactForm.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 3000);
  });
});
