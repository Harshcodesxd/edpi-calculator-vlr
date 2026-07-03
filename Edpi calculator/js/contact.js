/* 
  eDPI Calculator - Contact Form Interactions
  Validates input fields and manages a success popup modal
*/

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const modalOverlay = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!contactForm || !modalOverlay) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

    // Fetch values
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Basic Validation Check
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields in the contact form.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Success Actions: Reveal Glass Modal Dialog
    modalOverlay.classList.add('open');
  });

  // Close Modal Button Event
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
      contactForm.reset(); // Reset form fields
    });
  }

  // Close Modal when clicking outside the content frame
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('open');
      contactForm.reset();
    }
  });

  // Basic regex check for email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
