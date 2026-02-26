"use client"; // Required for useState and interactivity

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
   };

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
                     <a
                        href="https://www.tiktok.com/@experttrader111?_r=1&_t=ZN-94CZGFxhaEg"
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

                     <a
                        href="https://chat.whatsapp.com/D9zZ5MYpdAP26aGIumxjIe?mode=gi_t"
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
                  <button
                     className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
                     onClick={toggleMobileMenu}
                     aria-label="Toggle menu"
                  >
                     <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        {isMobileMenuOpen ? (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                        ) : (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        )}
                     </svg>
                  </button>
               </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMobileMenuOpen && (
               <nav className="md:hidden py-4 border-t border-gray-700 animate-slideDown">
                  <div className="flex flex-col space-y-3">
                     <Link
                        href="#features"
                        className="text-gray-300 hover:text-blue-400 transition py-2"
                        onClick={closeMobileMenu}
                     >
                        Features
                     </Link>
                     <Link
                        href="#success"
                        className="text-gray-300 hover:text-blue-400 transition py-2"
                        onClick={closeMobileMenu}
                     >
                        Success
                     </Link>
                     <Link
                        href="#packages"
                        className="text-gray-300 hover:text-blue-400 transition py-2"
                        onClick={closeMobileMenu}
                     >
                        Packages
                     </Link>
                     <Link
                        href="#reviews"
                        className="text-gray-300 hover:text-blue-400 transition py-2"
                        onClick={closeMobileMenu}
                     >
                        Reviews
                     </Link>
                  </div>
               </nav>
            )}
         </div>

         {/* Optional: Add a simple CSS animation for the dropdown */}
         <style jsx>{`
            @keyframes slideDown {
               from {
                  opacity: 0;
                  transform: translateY(-10px);
               }
               to {
                  opacity: 1;
                  transform: translateY(0);
               }
            }
            .animate-slideDown {
               animation: slideDown 0.2s ease-out;
            }
         `}</style>
      </header>
   );
}
