import { STUDIO_INFO } from '../constants/studioData'

/**
 * Generate a direct WhatsApp deep link with encoded message
 * @param {string} message - The text to send
 * @returns {string} WhatsApp URL
 */
export const makeWhatsAppUrl = (message) => {
  return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Generate a custom quote inquiry message
 */
export const getCustomOrderWhatsAppUrl = ({ occasion, frameType, size, matte, customNote }) => {
  const msg = `Namaste Jai Photo Frame! 🙏\nI want to order a Custom Photo Frame:\n• Occasion: ${occasion}\n• Frame Style: ${frameType}\n• Size: ${size}\n• Matting: ${matte}\n• Inscription/Note: "${customNote}"\nPlease share quotation and delivery timeline. Thank you!`
  return makeWhatsAppUrl(msg)
}

/**
 * Generate a product inquiry message
 */
export const getProductInquiryUrl = (productName) => {
  const msg = `Hello Jai Photo Frame! I am interested in "${productName}". Please tell me the price, dimensions and framing options.`
  return makeWhatsAppUrl(msg)
}

/**
 * Generate a gallery photo inquiry message
 */
export const getGalleryInquiryUrl = (title, category) => {
  const msg = `Hello Jai Photo Frame! I saw the "${title}" (${category} Frame) in your gallery and want to order similar framing.`
  return makeWhatsAppUrl(msg)
}
