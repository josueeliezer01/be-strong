import Carousel from '@/Components/Carousel/Carousel';
import OfficialPartnersCarousel from '@/Components/OfficialPartnersCarousel/OfficialPartnersCarousel';
import './globals.css';

export default function Home() {
  return (
    <div className="home">
      <Carousel />
      <OfficialPartnersCarousel />
    </div>
  );
}
