export default function LearningModule() {
   return (
      <section className="py-16 bg-gray-900">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
               Learning Module
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-gray-800 p-8 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg
                        className="w-8 h-8 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                     >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L6.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                     </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                     Lifetime Mentorship & Support
                  </h3>
                  <p className="text-gray-400">
                     Ongoing guidance whenever you need it
                  </p>
               </div>
               <div className="bg-gray-800 p-8 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg
                        className="w-8 h-8 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                     >
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                     </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                     Assignment Base Learning
                  </h3>
                  <p className="text-gray-400">
                     Practice with real-world tasks
                  </p>
               </div>
               <div className="bg-gray-800 p-8 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg
                        className="w-8 h-8 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                     >
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                     </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                     Discussion with Trading Community
                  </h3>
                  <p className="text-gray-400">Join our active Discord group</p>
               </div>
            </div>
         </div>
      </section>
   );
}
