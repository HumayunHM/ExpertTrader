export default function Footer() {
   return (
      <footer className="bg-gray-900 border-t border-gray-700 py-8">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Expert Trader. All rights
                  reserved.
               </div>
               <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                     Privacy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                     Terms
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                     Contact
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
