import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
  useEffect(() => {

    new Swiper('.swiper-container', {
      modules: [Navigation, Pagination],
      slidesPerView: 1, 
      spaceBetween: 20, 
      centeredSlides: true, 
      navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
      },
      pagination: {
        el: '.swiper-pagination', 
        clickable: true,
      },
      grabCursor: true, 
      loop: true, 
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-20 space-y-6 relative">
      <p className="text-gray-700 text-2xl">CLIENT</p>
      <h1 className="uppercase font-bold text-4xl">Testimonials</h1>
      <span className="absolute inset-x-0 mx-auto w-20 border-b-8 border-black top-40"></span>

      {/* Swiper Container */}
      <div className="swiper-container max-w-[300px] md:max-w-[300px] pt-10">
        <div className="swiper-wrapper">

          {/* Testimonial Card 1 */}
          <div className="swiper-slide bg-white p-6 shadow-md rounded-md flex flex-col items-center">
            <img
              src="/man2.jpg" // Replace with the correct image path
              alt="Person"
              className="rounded-full h-16 w-16 object-cover mb-4"
            />
            <p className="text-gray-600 text-center mb-4">
              Moritz has been fantastic to collaborate with and continues to support us on many projects. He has a very high level of craft and is easy to work with.
            </p>
            <h3 className="mt-2 font-bold">Dominic Barlow</h3>
            <p className="text-sm text-gray-500">Lead Creative Producer, DeepMind</p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="swiper-slide bg-white p-6 shadow-md rounded-md flex flex-col items-center">
            <img
              src="/m.jpg" // Replace with the correct image path
              alt="Person"
              className="rounded-full h-16 w-16 object-cover mb-4"
            />
            <p className="text-gray-600 text-center mb-4">
              Moritz has been fantastic to collaborate with and continues to support us on many projects. He has a very high level of craft and is easy to work with.
            </p>
            <h3 className="mt-2 font-bold">John Doe</h3>
            <p className="text-sm text-gray-500">CEO, Company A</p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="swiper-slide bg-white p-6 shadow-md rounded-md flex flex-col items-center">
            <img
              src="/n.jpg" // Replace with the correct image path
              alt="Person"
              className="rounded-full h-16 w-16 object-cover mb-4"
            />
            <p className="text-gray-600 text-center mb-4">
              Moritz has been fantastic to collaborate with and continues to support us on many projects. He has a very high level of craft and is easy to work with.
            </p>
            <h3 className="mt-2 font-bold">Jane Smith</h3>
            <p className="text-sm text-gray-500">Manager, Company B</p>
          </div>

        </div>

        {/* Pagination dots */}
        <div className="swiper-pagination"></div>

        {/* Navigation buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Testimonials;