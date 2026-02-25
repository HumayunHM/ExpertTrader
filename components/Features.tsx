export default function Features() {
   const features = [
      "30 Live Classes + Live Sessions",
      "Funded accounts will be awarded to excellent Students",
      "Assignments based on your trading style",
      "WhatsApp Support (2:7)",
      "Live Trading in Sessions (After course)",
      "Discussion Forum (Discord Group)",
      "Life Time Recorded Sessions access",
      "Q&A Sessions",
   ];

   return (
      <section id="features" className="py-16 bg-gray-900">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
               Comprehensive Forex Trading Program Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition"
                  >
                     <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                        <svg
                           className="w-5 h-5 text-blue-400"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                        >
                           <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </div>
                     <p className="text-gray-200 font-medium">{feature}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
