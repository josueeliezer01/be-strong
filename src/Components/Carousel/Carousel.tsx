'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';

const images = [
  '/carousel/img1.jpeg',
  '/carousel/img2.webp',
  '/carousel/img3.webp',
  '/carousel/img4.webp',
  '/carousel/img5.webp',
];

const Carousel: React.FC = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="carousel"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
