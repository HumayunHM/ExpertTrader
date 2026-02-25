import Link from "next/link";

export default function Header() {
   return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold text-gray-900">
                     Badar<span className="text-blue-600">Trader</span>
                  </Link>
               </div>
               <nav className="hidden md:flex space-x-8">
                  <Link
                     href="#features"
                     className="text-gray-600 hover:text-blue-600 transition"
                  >
                     Features
                  </Link>
                  <Link
                     href="#success"
                     className="text-gray-600 hover:text-blue-600 transition"
                  >
                     Success
                  </Link>
                  <Link
                     href="#packages"
                     className="text-gray-600 hover:text-blue-600 transition"
                  >
                     Packages
                  </Link>
                  <Link
                     href="#reviews"
                     className="text-gray-600 hover:text-blue-600 transition"
                  >
                     Reviews
                  </Link>
               </nav>
               <div className="md:hidden">
                  {/* Mobile menu button - simplified */}
                  <button className="text-gray-600 hover:text-blue-600">
                     <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
}
