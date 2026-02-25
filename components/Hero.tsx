import Image from "next/image";

export default function Hero() {
   return (
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                     Badar Trader
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mt-2">
                     Learn Trading From The Top Mentor of Pakistan
                  </h2>
                  <p className="text-lg text-gray-600 mt-4">
                     Get The MentorShip of The Most Experienced and Successful
                     Mentor
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 items-center">
                     <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-md transition">
                        JOIN THE COURSE
                     </button>
                     <span className="text-gray-500 flex items-center gap-2">
                        <svg
                           className="w-5 h-5 text-blue-500"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                        >
                           <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        13,000+ like-minded students
                     </span>
                  </div>
               </div>
               <div className="relative h-64 md:h-96 bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
                  {/* Placeholder image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                     <span>Hero Image Placeholder</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
