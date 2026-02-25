export default function Footer() {
   return (
      <footer className="bg-white border-t border-gray-200 py-8">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} Badar Trader. All rights
                  reserved.
               </div>
               <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                     Privacy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                     Terms
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                     Contact
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
