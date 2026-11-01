/**
 * CONFIGURATION DU CLIENT — À MODIFIER AVANT LA MISE EN LIGNE
 * Exemple de numéro marocain : 2126XXXXXXXX (sans +, espaces, ni 0 initial).
 * Laissez whatsappNumber vide pour conserver le mode démo.
 */
const BUSINESS = {
  name: "ATELIER NOIR",
  city: "Oujda",
  whatsappNumber: "",        // EXEMPLE DE FORMAT : 2126XXXXXXXX (ne pas laisser cet exemple tel quel)
  phoneDisplay: "Numéro WhatsApp à ajouter",
  address: "Oujda, Maroc — Adresse à ajouter",
  hours: "À confirmer avec le salon",
  instagramUrl: "",          // Exemple : https://www.instagram.com/votrecompte/
  instagramLabel: "@atelier.noir — à personnaliser"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const dialog = $('#booking-dialog');
const form = $('#booking-form');
const serviceSelect = $('#service-choice');
const bookingPreview = $('#booking-preview');
const bookingDate = $('#booking-date');
const menuToggle = $('.menu-toggle');
const nav = $('#primary-nav');

$('#year').textContent = new Date().getFullYear();
$$('[data-address]').forEach(el => el.textContent = BUSINESS.address);
$$('[data-hours]').forEach(el => el.textContent = BUSINESS.hours);
$$('[data-phone]').forEach(el => el.textContent = BUSINESS.phoneDisplay);
const instagram = $('#instagram-link');
instagram.textContent = BUSINESS.instagramLabel + (BUSINESS.instagramUrl ? ' ↗' : '');
instagram.setAttribute('href', BUSINESS.instagramUrl || '#contact');
if (BUSINESS.instagramUrl) { instagram.target = '_blank'; instagram.rel = 'noopener noreferrer'; }

// Date locale pour éviter le décalage d'un jour avec UTC.
const today = new Date();
const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
bookingDate.min = localDate;

function openBooking(service = '') {
  if (service) serviceSelect.value = service;
  bookingPreview.hidden = true;
  dialog.showModal();
  $('#customer-name').focus();
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
$$('[data-book]').forEach(btn => btn.addEventListener('click', () => openBooking()));
$$('[data-book-service]').forEach(btn => btn.addEventListener('click', () => openBooking(btn.dataset.bookService)));
$('#close-booking').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
});
$$('.primary-nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = `Bonjour ${BUSINESS.name} !\nJe souhaite demander un rendez-vous.\n\nPrénom : ${String(data.get('name')).trim()}\nPrestation : ${data.get('service')}\nDate souhaitée : ${data.get('date')}\nHeure souhaitée : ${data.get('time')}\n\nMerci de me confirmer la disponibilité.`;
  const phone = BUSINESS.whatsappNumber.replace(/\D/g, '');
  if (phone.length >= 10 && phone.length <= 15) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    toast('Votre demande est prête dans WhatsApp. Envoyez-la pour contacter le salon.');
  } else {
    $('#message-output').textContent = message;
    bookingPreview.hidden = false;
    $('#copy-status').textContent = '';
    bookingPreview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

$('#copy-message').addEventListener('click', async () => {
  const message = $('#message-output').textContent;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(message);
    } else {
      const temp = document.createElement('textarea');
      temp.value = message; temp.style.position = 'fixed'; temp.style.opacity = '0';
      document.body.appendChild(temp); temp.select();
      if (!document.execCommand('copy')) throw new Error('Copie indisponible');
      temp.remove();
    }
    $('#copy-status').textContent = 'Copié !';
  } catch {
    $('#copy-status').textContent = 'Sélectionnez le message ci-dessus pour le copier.';
  }
});
let toastTimeout;
function toast(text) {
  const element = $('#toast');
  element.textContent = text;
  element.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => element.classList.remove('show'), 5000);
}
