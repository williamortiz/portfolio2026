const contactCta = document.getElementById('contactCta');
const contactAccordion = document.getElementById('contactAccordion');
const contactStatus = document.getElementById('contactStatus');
const heroContactForm = document.getElementById('heroContactForm');
const contactSubtitle = document.getElementById('contactSubtitle');
let confirmationTimer;
const defaultSubtitleText = '';

function setAccordionState(isOpen) {
  if (!contactAccordion || !contactCta) {
    return;
  }

  contactAccordion.classList.toggle('open', isOpen);
  contactCta.setAttribute('aria-expanded', String(isOpen));
  contactAccordion.setAttribute('aria-hidden', String(!isOpen));
}

if (contactCta && contactAccordion) {
  contactCta.addEventListener('click', () => {
    const isOpen = !contactAccordion.classList.contains('open');
    setAccordionState(isOpen);
  });

  contactAccordion.addEventListener('click', (event) => {
    if (event.target === contactAccordion) {
      setAccordionState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && contactAccordion.classList.contains('open')) {
      setAccordionState(false);
    }
  });
}

if (heroContactForm && contactStatus) {
  heroContactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(heroContactForm);
    const accessKey = String(formData.get('access_key') || '');

    contactStatus.classList.remove('success', 'error');
    if (contactSubtitle) {
      if (confirmationTimer) {
        window.clearTimeout(confirmationTimer);
      }
      contactSubtitle.classList.remove('fade-out', 'pop-in', 'success-state');
      contactSubtitle.textContent = defaultSubtitleText;
    }

    if (!accessKey || accessKey === 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY') {
      contactStatus.textContent = 'Add your Web3Forms access key to enable sending.';
      contactStatus.classList.add('error');
      return;
    }

    const submitButton = heroContactForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
    }

    contactStatus.textContent = 'Sending...';

    try {
      const response = await fetch(heroContactForm.action, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        contactStatus.textContent = 'Message sent successfully. Thank you!';
        contactStatus.classList.add('success');
        if (contactSubtitle) {
          contactSubtitle.textContent = 'Message sent successfully. Thank you!';
          contactSubtitle.classList.add('success-state');
          void contactSubtitle.offsetWidth;
          contactSubtitle.classList.add('fade-out');
          confirmationTimer = window.setTimeout(() => {
            contactSubtitle.classList.remove('fade-out', 'success-state');
            contactSubtitle.textContent = defaultSubtitleText;
            void contactSubtitle.offsetWidth;
            contactSubtitle.classList.add('pop-in');
          }, 4000);
        }
        heroContactForm.reset();
        setAccordionState(false);
      } else {
        contactStatus.textContent = 'Unable to send message right now. Please try again.';
        contactStatus.classList.add('error');
      }
    } catch (error) {
      contactStatus.textContent = 'Network error. Please try again in a moment.';
      contactStatus.classList.add('error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}
