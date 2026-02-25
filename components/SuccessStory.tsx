"use client";

import Image from "next/image";
import { useState } from "react";

export default function SuccessStory() {
   // Replace with your actual image paths
   const images = [
      "/success1.jpeg",
      "/success2.jpeg",
      "/success3.jpeg",
      "/success4.jpeg",
      "/success5.jpeg",
      "/success6.jpeg",
      "/success7.jpeg",
      "/success8.jpeg",
      "/success9.jpeg",
      "/success10.jpeg",
      "/success11.jpeg",
   ];

   const [currentIndex, setCurrentIndex] = useState(0);
   const imagesPerView = 3; // number of images shown at once

   const totalSlides = Math.ceil(images.length / imagesPerView);
   const maxIndex = totalSlides - 1;

   const nextSlide = () => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
   };

   const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
   };

   return (
      <section id="success" className="py-16 bg-gray-900">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
               SUCCESSFUL RESULTS
            </h2>

            {/* Carousel container */}
            <div className="relative max-w-6xl mx-auto">
               {/* Images wrapper */}
               <div className="overflow-hidden rounded-2xl">
                  <div
                     className="flex transition-transform duration-500 ease-out"
                     style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                     }}
                  >
                     {/* Map through images and group them into slides */}
                     {Array.from({ length: totalSlides }).map(
                        (_, slideIndex) => (
                           <div
                              key={slideIndex}
                              className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-1"
                           >
                              {images
                                 .slice(
                                    slideIndex * imagesPerView,
                                    slideIndex * imagesPerView + imagesPerView,
                                 )
                                 .map((src, imgIndex) => (
                                    <div
                                       key={imgIndex}
                                       className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                                    >
                                       <Image
                                          src={src}
                                          alt={`Success screenshot ${slideIndex * imagesPerView + imgIndex + 1}`}
                                          fill
                                          className="object-cover"
                                          sizes="(max-width: 768px) 100vw, 33vw"
                                       />
                                    </div>
                                 ))}
                           </div>
                        ),
                     )}
                  </div>
               </div>

               {/* Navigation arrows */}
               <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all z-10"
                  aria-label="Previous slide"
               >
                  <svg
                     className="w-5 h-5"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                     />
                  </svg>
               </button>
               <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all z-10"
                  aria-label="Next slide"
               >
                  <svg
                     className="w-5 h-5"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                     />
                  </svg>
               </button>

               {/* Pagination dots */}
               {totalSlides > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                     {Array.from({ length: totalSlides }).map((_, idx) => (
                        <button
                           key={idx}
                           onClick={() => setCurrentIndex(idx)}
                           className={`w-2.5 h-2.5 rounded-full transition-all ${
                              idx === currentIndex
                                 ? "bg-blue-400 w-6"
                                 : "bg-gray-600 hover:bg-gray-500"
                           }`}
                           aria-label={`Go to slide ${idx + 1}`}
                        />
                     ))}
                  </div>
               )}
            </div>
         </div>
      </section>
   );
}
