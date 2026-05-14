import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import AboutTeaser from '../components/home/AboutTeaser';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import BeforeAfterTeaser from '../components/home/BeforeAfterTeaser';
import Testimonials from '../components/home/Testimonials';
import DoctorsTeaser from '../components/home/DoctorsTeaser';
import BookingTeaser from '../components/home/BookingTeaser';
import SmileQuiz from '../components/home/SmileQuiz';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutTeaser />
      <ServicesPreview />
      <SmileQuiz />
      <WhyChooseUs />
      <BeforeAfterTeaser />
      <Testimonials />
      <DoctorsTeaser />
      <BookingTeaser />
    </>
  );
}
