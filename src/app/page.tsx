import Carousel from '@/Components/Carousel/Carousel';
import OfficialPartnersCarousel from '@/Components/OfficialPartnersCarousel/OfficialPartnersCarousel';
import './globals.css';
import CategoriesSection from '@/Components/CategoriesSection/CategoriesSection';

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <OfficialPartnersCarousel />
      <CategoriesSection />
    </div>
  );
}