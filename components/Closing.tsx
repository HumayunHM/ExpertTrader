import Link from "next/link";

export default function Closing() {
   return (
      <section className="py-20 bg-blue-600 text-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
               THE CHOICE IS YOURS
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
               Start your journey to financial freedom today. Join thousands of
               successful traders.
            </p>
            <Link href="/join">
               <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg shadow-lg transition">
                  Enroll Now
               </button>
            </Link>
         </div>
      </section>
   );
}
