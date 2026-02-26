import Link from "next/link";
import Image from "next/image";

export default function Header() {
   return (
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               {/* Logo - left side */}
               <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                     <span className="text-2xl font-bold text-white">
                        Expert<span className="text-blue-400">Trader</span>
                     </span>
                  </Link>
               </div>

               {/* Right side: navigation + social icons + mobile button */}
               <div className="flex items-center space-x-4 md:space-x-6">
                  {/* Desktop Navigation (hidden on mobile) */}
                  <nav className="hidden md:flex space-x-6">
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

                  {/* Social Icons - always visible */}
                  <div className="flex items-center space-x-3">
                     {/* TikTok Icon (PNG) */}
                     <a
                        href="https://www.tiktok.com/@experttrader111?_r=1&_t=ZN-94CZGFxhaEg" // replace
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                        aria-label="TikTok"
                     >
                        <Image
                           src="/tiktok.png"
                           alt="TikTok"
                           width={24}
                           height={24}
                           className="w-5 h-5 md:w-6 md:h-6"
                        />
                     </a>

                     {/* WhatsApp Group Icon (PNG) */}
                     <a
                        href="https://chat.whatsapp.com/D9zZ5MYpdAP26aGIumxjIe?mode=gi_t" // replace
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition relative group"
                        aria-label="WhatsApp Group"
                        title="Join the public whatsapp group"
                     >
                        <Image
                           src="/whatsapp.png"
                           alt="WhatsApp Group"
                           width={24}
                           height={24}
                           className="w-5 h-5 md:w-6 md:h-6"
                        />
                     </a>
                  </div>

                  {/* Mobile Menu Button */}
                  <button className="md:hidden text-gray-300 hover:text-blue-400">
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
