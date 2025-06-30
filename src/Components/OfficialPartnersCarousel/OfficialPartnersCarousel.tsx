'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './OfficialPartnersCarousel.css';

const logos = [
  { id: 'benfica', src: '/logos/benfica.svg' },
  { id: 'milan', src: '/logos/milan.svg' },
  { id: 'borussia-dortmund', src: '/logos/borussia-dortmund.svg' },
  { id: 'botafogo', src: '/logos/botafogo.svg' },
  { id: 'boston-celtics', src: '/logos/boston-celtics.svg' },
  { id: 'vasco', src: '/logos/vasco.svg' },
  { id: 'golden-state-warriors', src: '/logos/golden-state-warriors.svg' },
  { id: 'ifbb', src: '/logos/ifbb.png' },
  { id: 'los-angeles-lakers', src: '/logos/los-angeles-lakers.svg' },
  { id: 'x-games', src: '/logos/x-games.svg' },
  // Adicione mais conforme necessário
];

const OfficialPartnersCarousel = () => {
  return (
    <section className="partners-carousel-section">
      <h2 className="partners-title">PARCEIROS OFICIAIS</h2>
      <div className="partners-carousel">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {logos.map((logo) => (
            <SwiperSlide className="logo-slide" key={logo.id}>
              <div className="logo-wrapper">
                <img
                  src={logo.src}
                  alt={logo.id}
                  width={202}
                  height={202}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OfficialPartnersCarousel;
