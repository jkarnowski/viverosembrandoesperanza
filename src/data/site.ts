// Nursery contact details, used across the site.
// TODO: replace every placeholder below with the nursery's real details before launch.

export const site = {
  name: 'Vivero Sembrando Esperanza',
  email: 'contacto@viverosembrandoesperanza.cl',
  /** Digits only, with country code, no "+" (used for wa.me links). */
  whatsapp: '56900000000',
  /** As shown on the page. */
  phone: '+56 9 0000 0000',
  address: {
    street: 'Camino Ejemplo 123',
    city: 'Villarrica, Región de La Araucanía',
    country: 'Chile',
  },
  /** Link to the nursery on Google Maps (or any map service). */
  mapUrl: 'https://maps.google.com/?q=Villarrica,+Chile',
  instagram: 'https://www.instagram.com/',
  hours: {
    es: ['Lunes a viernes: 9:00 – 18:00', 'Sábado: 9:00 – 14:00', 'Domingo: cerrado'],
    en: ['Monday to Friday: 9:00 – 18:00', 'Saturday: 9:00 – 14:00', 'Sunday: closed'],
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
