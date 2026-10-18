// Single source of truth for contact channels so every CTA stays in sync.
export const WHATSAPP_NUMBER = '2349130436032';
export const EMAIL = 'hello@francisnaga.site';

/**
 * WhatsApp deep link with a prefilled opener, so a visitor lands in the chat
 * with context instead of a blank box (fewer abandoned conversations).
 */
export function whatsappLink(topic) {
  const text = topic
    ? `Hi Naga, I found you through your portfolio. I’m interested in ${topic}.`
    : 'Hi Naga, I found you through your portfolio and want to discuss a project.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** mailto link with a subject line that tells you which service the lead came from. */
export function emailLink(topic) {
  const subject = topic ? `Project enquiry: ${topic}` : 'Project enquiry';
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}
