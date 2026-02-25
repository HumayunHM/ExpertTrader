import Image from "next/image";

export default function SuccessStory() {
   return (
      <section id="success" className="py-16 bg-gray-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
               SUCCESS STORY
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
               <div className="md:flex">
                  <div className="md:flex-shrink-0 bg-gray-200 h-64 md:h-auto md:w-48 flex items-center justify-center text-gray-500">
                     <span>Image Placeholder</span>
                  </div>
                  <div className="p-8">
                     <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                        Student Success
                     </div>
                     <p className="mt-2 text-xl font-medium text-gray-900">
                        "I turned my trading around thanks to Badar's
                        mentorship. From losing to consistent profits!"
                     </p>
                     <p className="mt-4 text-gray-600">
                        — Ali R., Professional Trader
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
