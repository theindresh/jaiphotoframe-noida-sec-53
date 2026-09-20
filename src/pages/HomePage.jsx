import HeroSection from '../components/home/HeroSection'
import OccasionsSection from '../components/home/OccasionsSection'
import FeaturedSection from '../components/home/FeaturedSection'
import CustomFrameBanner from '../components/home/CustomFrameBanner'
import GallerySection from '../components/home/GallerySection'
import WhyChooseSection from '../components/home/WhyChooseSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import StudioLocationSection from '../components/home/StudioLocationSection'
import ContactCtaBanner from '../components/home/ContactCtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OccasionsSection />
      <FeaturedSection />
      <CustomFrameBanner />
      <GallerySection />
      <WhyChooseSection />
      <TestimonialsSection />
      <StudioLocationSection />
      <ContactCtaBanner />
    </>
  )
}
