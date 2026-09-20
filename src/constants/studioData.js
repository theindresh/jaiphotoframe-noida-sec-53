// Centralized Studio Information & Product Data for Jai Photo Frame (जय फोटो फ्रेम)

export const STUDIO_INFO = {
  nameHindi: 'जय फोटो फ्रेम',
  nameEnglish: 'Jai Photo Frame',
  tagline: 'आपकी यादें, हमारी कला',
  taglineWithHeart: 'आपकी यादें, हमारी कला ❤️',
  locationBrief: 'Noida Sector 53, Near Shiv Mandir',
  addressFull: 'Noida Sector 53, Near Shiv Mandir, Noida, Uttar Pradesh 201301',
  phone1: '9876543210',
  phone2: '9876543211',
  whatsappNumber: '919876543210',
  operatingHours: '10:00 AM – 9:30 PM (All 7 Days)',
  googleMapsUrl: 'https://maps.app.goo.gl/6mDsgxdbxrvYRiUg6',
  embedMapUrl: 'https://maps.google.com/maps?q=Jay+Photo+Framing,+Sector+53,+Noida&ll=28.5904214,77.3624138&z=17&output=embed',
  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  }
}

// 8 Occasions from Reference Design with frame dimensions & styles
export const OCCASIONS = [
  {
    id: 'family',
    title: 'Family',
    subtitle: 'Together Always',
    defaultSize: '12 × 18 in',
    frameStyle: 'Classic Teak Wood',
    aspectRatio: '1 / 1',
    description: 'Cherish warmth and generations together in premium wooden and collage frames.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'couple',
    title: 'Couple',
    subtitle: 'Love Forever',
    defaultSize: '16 × 24 in',
    frameStyle: 'Antique Gold Ornate',
    aspectRatio: '1 / 1',
    description: 'Romantic anniversary & couple keepsakes crafted with gold borders and dual mats.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Special Moments',
    defaultSize: '20 × 30 in',
    frameStyle: 'Royal Teak Wood',
    aspectRatio: '1 / 1',
    description: 'Grand royal wedding portraits with museum-grade acrylic and anti-glare glass.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'baby',
    title: 'Baby',
    subtitle: 'Little Smiles',
    defaultSize: '8 × 12 in',
    frameStyle: 'Matte White Border',
    aspectRatio: '1 / 1',
    description: 'Newborn milestone frames, 1st birthday collage displays, and adorable footprints.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'collage',
    title: 'Collage',
    subtitle: 'More Memories',
    defaultSize: '18 × 24 in',
    frameStyle: 'Multi-Window Grid',
    aspectRatio: '1 / 1',
    description: 'Combine 4 to 20 cherished moments into one cohesive handcrafted wall art.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'portrait',
    title: 'Portrait',
    subtitle: 'Your Personality',
    defaultSize: '12 × 16 in',
    frameStyle: 'Natural Walnut',
    aspectRatio: '1 / 1',
    description: 'Single artistic headshots and personality portraits with rich teak finishes.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'gift',
    title: 'Gift Frames',
    subtitle: 'Perfect Gifting',
    defaultSize: '10 × 14 in',
    frameStyle: 'Artisan Gold Border',
    aspectRatio: '1 / 1',
    description: 'Personalised gift plaques, quote frames, and housewarming frames with custom notes.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 'mirror',
    title: 'Mirror Frames',
    subtitle: 'Decorative Style',
    defaultSize: '18 × 30 in',
    frameStyle: 'Vintage Gold Mirror',
    aspectRatio: '1 / 1',
    description: 'Vintage ornate and modern minimal framed mirrors for luxury interior decor.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&auto=format&fit=crop&q=80',
  },
]

// Featured Products with frame specifications
// Signature Exclusive Collection Frames
export const SIGNATURE_FRAMES = [
  {
    id: 'sig-1',
    name: 'Family Story Frame',
    subtitle: 'Multiple photos, one beautiful story',
    desc: 'Combine 4–12 cherished family moments in one beautifully crafted teakwood frame. Hand-joined in Noida Sector 53 with beveled acid-free matting.',
    highlight: 'Handcrafted Teak · Museum Matting',
    defaultSize: '18 × 24 in',
    frameStyle: 'Classic Teak Wood',
    badge: 'Signature',
    category: 'Collage',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'sig-2',
    name: 'Classic Wooden Frame',
    subtitle: 'Timeless design for every space',
    desc: 'Solid natural teak with precision mitered corners and beveled mat — built to protect and showcase your portraits for generations.',
    highlight: 'Solid Teak · Anti-Glare Glass',
    defaultSize: '16 × 24 in',
    frameStyle: 'Natural Solid Teak',
    badge: 'Signature',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'sig-3',
    name: 'Heart Collage Frame',
    subtitle: 'Perfect for couples & loved ones',
    desc: 'An exquisite heart-shaped cutout design holding your couple, anniversary, or wedding memories with warm ambient elegance.',
    highlight: 'Heart Cutout Design · Gift Ready',
    defaultSize: '16 × 16 in',
    frameStyle: 'Heart Cutout Teak',
    badge: 'Signature',
    category: 'Couple',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'sig-4',
    name: 'LED Signature Frame',
    subtitle: 'Light up your memories',
    desc: 'Illuminate your photos with gentle, warm ambient LED backlighting. USB powered with easy wall mount or table display stand.',
    highlight: 'Warm LED Backlight · USB Powered',
    defaultSize: '12 × 18 in',
    frameStyle: 'LED Illuminated Box',
    badge: 'Signature',
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'sig-5',
    name: 'Royal Portrait Frame',
    subtitle: 'Elegant & premium look',
    desc: 'Vintage royal ornate border with gold foil accents and crystal glass — crafted for heirloom wedding and baby milestones.',
    highlight: 'Antique Gold Ornate · Beveled Glass',
    defaultSize: '12 × 16 in',
    frameStyle: 'Antique Gold Ornate',
    badge: 'Signature',
    category: 'Baby',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80',
  },
]

// Customer Favorites Bestseller Frames
export const BESTSELLER_FRAMES = [
  {
    id: 'best-1',
    name: 'Collage Photo Frame',
    subtitle: 'Capture more moments together',
    desc: 'A grand multi-window frame designed to house 6–10 photos in one balanced, aesthetic wall piece.',
    highlight: 'Multi-Window Grid · Acid-Free Mat',
    defaultSize: '18 × 24 in',
    frameStyle: 'Multi-Window Grid',
    badge: 'Bestseller',
    category: 'Collage',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'best-2',
    name: 'Couple Frame',
    subtitle: 'A bond for lifetime',
    desc: 'Celebrate your togetherness with deep walnut moulding and double gold-trimmed matting.',
    highlight: 'Royal Teak Wood · Dual Matting',
    defaultSize: '16 × 24 in',
    frameStyle: 'Royal Teak Wood',
    badge: 'Bestseller',
    category: 'Couple',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'best-3',
    name: 'Baby Milestone Frame',
    subtitle: 'Cherish every little moment',
    desc: 'Capture all 12 precious months of your baby\'s first year in a single museum-grade milestone grid frame.',
    highlight: '12-Month Grid · Gifting Box Included',
    defaultSize: '12 × 18 in',
    frameStyle: '12-Month Milestone Grid',
    badge: 'Bestseller',
    category: 'Baby',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'best-4',
    name: 'Portrait Frame',
    subtitle: 'Your personality, our art',
    desc: 'Clean, gallery-style matte black frame that puts 100% focus on your personality and memories.',
    highlight: 'Matte Black Studio · Precision Mat',
    defaultSize: '12 × 18 in',
    frameStyle: 'Matte Black Studio',
    badge: 'Bestseller',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'best-5',
    name: 'Gift Frame',
    subtitle: 'Perfect for every occasion',
    desc: 'Ready-to-gift frame with complimentary gift packaging, silk ribbon, and custom message plaque.',
    highlight: 'Gift Box & Ribbon Included',
    defaultSize: '10 × 14 in',
    frameStyle: 'Luxury Gift Box Frame',
    badge: 'Bestseller',
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
  },
]

// Backwards-compatible export
export const FEATURED_FRAMES = [...SIGNATURE_FRAMES, ...BESTSELLER_FRAMES]

// Gallery Portfolio Items
export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'Family',
    title: 'Grand Heritage Family Portrait',
    dimensions: '24 × 36 in',
    frameType: 'Teak Wood & Gold Bevel'
  },
  {
    id: 'gal-2',
    category: 'Couple',
    title: 'Royal Couple Golden Memories',
    dimensions: '16 × 24 in',
    frameType: 'Antique Gold Ornate'
  },
  {
    id: 'gal-3',
    category: 'Wedding',
    title: 'Traditional Wedding Ceremony Frame',
    dimensions: '20 × 30 in',
    frameType: 'Museum Mat & Walnut Frame'
  },
  {
    id: 'gal-4',
    category: 'Baby',
    title: 'Sweet Newborn Milestone Frame',
    dimensions: '12 × 18 in',
    frameType: 'Classic White Border'
  },
  {
    id: 'gal-5',
    category: 'Collage',
    title: 'Multi-Window Story Collage Frame',
    dimensions: '18 × 24 in',
    frameType: '9-Window Matte Grid'
  },
  {
    id: 'gal-6',
    category: 'Custom',
    title: 'Handmade Teakwood Shadowbox',
    dimensions: '16 × 20 in',
    frameType: 'Deep Profile Teak Wood'
  },
  {
    id: 'gal-7',
    category: 'Family',
    title: 'Three Generations Together Frame',
    dimensions: '20 × 28 in',
    frameType: 'Natural Teak with Dual Mat'
  },
  {
    id: 'gal-8',
    category: 'Wedding',
    title: 'Varmala Celebration Matte Gold Frame',
    dimensions: '24 × 36 in',
    frameType: 'Brushed Brass Elegance'
  },
]

// Customer Testimonials
export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Priya Sharma',
    location: 'Noida Sector 53',
    rating: 5,
    text: 'Beautiful frame and excellent finishing. Very cooperative and good collection. Got our anniversary frame ready in just 1 day!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-2',
    name: 'Rahul Kapoor',
    location: 'Near Shiv Mandir, Noida',
    rating: 5,
    text: 'We got a large custom family collage made here. The teak wood framing and non-reflective glass make it look like a palace portrait.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-3',
    name: 'Ananya Verma',
    location: 'Noida Extension',
    rating: 5,
    text: 'Ordered an LED photo frame for my parents. The lighting and print crispness are extraordinary. Jai Photo Frame is truly the best in Noida.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
]
