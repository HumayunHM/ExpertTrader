import Link from "next/link";

export default function Header() {
   return (
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                     <span className="text-2xl font-bold text-white">
                        Expert<span className="text-blue-400">Trader</span>
                     </span>
                  </Link>
               </div>
               <nav className="hidden md:flex space-x-8">
                  <Link
                     href="#features"
                     className="text-gray-300 hover:text-blue-400 transition"
                  >
                     Features
                  </Link>
                  <Link
                     href="#success"
                     className="text-gray-300 hover:text-blue-400 transition"
                  >
                     Success
                  </Link>
                  <Link
                     href="#packages"
                     className="text-gray-300 hover:text-blue-400 transition"
                  >
                     Packages
                  </Link>
                  <Link
                     href="#reviews"
                     className="text-gray-300 hover:text-blue-400 transition"
                  >
                     Reviews
                  </Link>
               </nav>
               <div className="md:hidden">
                  <button className="text-gray-300 hover:text-blue-400">
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
