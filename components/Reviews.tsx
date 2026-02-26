"use client";

import Image from "next/image";
import { useState } from "react";

export default function Reviews() {
   // Replace with your actual review screenshot paths
   const reviewImages = [
      "/review1.jpeg",
      "/review2.jpeg",
      "/review3.jpeg",
      "/review4.jpeg",
   ];

   const [currentIndex, setCurrentIndex] = useState(0);
   const imagesPerView = 3; // Show 3 at a time on all screens

   const totalSlides = Math.ceil(reviewImages.length / imagesPerView);
   const maxIndex = totalSlides - 1;

   const nextSlide = () => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
   };

   const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
   };

   return (
      <section id="reviews" className="py-16 bg-gray-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
               CLIENT REVIEWS
            </h2>

            {/* Carousel container */}
            <div className="relative max-w-3xl mx-auto">
               <div className="overflow-hidden rounded-3xl border border-gray-700 bg-gray-900/50 p-4">
                  <div
                     className="flex transition-transform duration-500 ease-out"
                     style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                     }}
                  >
                     {Array.from({ length: totalSlides }).map(
                        (_, slideIndex) => (
                           <div
                              key={slideIndex}
                              className="min-w-full grid grid-cols-3 gap-3 md:gap-5 px-1"
                           >
                              {reviewImages
                                 .slice(
                                    slideIndex * imagesPerView,
                                    slideIndex * imagesPerView + imagesPerView,
                                 )
                                 .map((src, imgIndex) => (
                                    <div
                                       key={imgIndex}
                                       className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                       <Image
                                          src={src}
                                          alt={`Student review ${slideIndex * imagesPerView + imgIndex + 1}`}
                                          fill
                                          className="object-cover"
                                          sizes="(max-width: 640px) 33vw, 25vw"
                                       />
                                       {/* Subtle gradient overlay that disappears on hover */}
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                                    </div>
                                 ))}
                           </div>
                        ),
                     )}
                  </div>
               </div>

               {/* Navigation arrows – slightly different style */}
               <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-6 bg-blue-600/80 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg backdrop-blur-sm transition-all z-10"
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
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-6 bg-blue-600/80 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg backdrop-blur-sm transition-all z-10"
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

               {/* Pagination dots with a blue accent */}
               {totalSlides > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                     {Array.from({ length: totalSlides }).map((_, idx) => (
                        <button
                           key={idx}
                           onClick={() => setCurrentIndex(idx)}
                           className={`w-2.5 h-2.5 rounded-full transition-all ${
                              idx === currentIndex
                                 ? "bg-blue-400 w-8"
                                 : "bg-gray-600 hover:bg-blue-300"
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
