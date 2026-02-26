import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function JoinPage() {
   // Replace with your client's email address
   const formEndpoint = "https://formsubmit.co/client@example.com";

   // For Formcarry (alternative), use: action="https://formcarry.com/s/your-form-id"

   return (
      <>
         <Header />
         <main className="bg-gray-900 text-gray-200 min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
               {/* Heading */}
               <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                  Join the Private Signals Group
               </h1>
               <p className="text-xl text-center text-gray-300 mb-12">
                  Get daily accurate forex signals directly to your phone and
                  start trading with confidence.
               </p>

               {/* Benefits Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                     <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        📈 High Accuracy
                     </h3>
                     <p className="text-gray-300">
                        Our signals have a proven track record with over 80% win
                        rate.
                     </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                     <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        ⚡ Instant Delivery
                     </h3>
                     <p className="text-gray-300">
                        Signals sent directly to your WhatsApp or Telegram.
                     </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                     <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        🧠 Expert Analysis
                     </h3>
                     <p className="text-gray-300">
                        Detailed entry, stop loss, and take profit levels.
                     </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                     <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        👥 Community Support
                     </h3>
                     <p className="text-gray-300">
                        Join our active community of traders.
                     </p>
                  </div>
               </div>

               {/* Pricing */}
               <div className="text-center mb-12">
                  <p className="text-3xl font-bold text-white">
                     One-time payment:{" "}
                     <span className="text-blue-400">$99 USD</span>
                  </p>
                  <p className="text-gray-400 mt-2">
                     (or equivalent in PKR – Rs 27,500)
                  </p>
               </div>

               {/* Payment Options */}
               <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Choose your payment method
               </h2>
               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Bank Transfer */}
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                     <h3 className="text-xl font-semibold text-blue-400 mb-4">
                        🏦 Bank Transfer
                     </h3>
                     <p className="text-gray-300 mb-2">
                        <span className="font-semibold">Bank:</span> Bank Al
                        Habib
                     </p>
                     <p className="text-gray-300 mb-2">
                        <span className="font-semibold">Account Number:</span>{" "}
                        5513008100658301
                     </p>
                     <p className="text-gray-300 mb-2">
                        <span className="font-semibold">IBAN:</span>{" "}
                        PK75BAHL5513008100658301
                     </p>
                     <p className="text-gray-300">
                        <span className="font-semibold">Account Title:</span>{" "}
                        Fizza Sabeel
                     </p>
                  </div>

                  {/* Binance TRC20 */}
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                     <h3 className="text-xl font-semibold text-blue-400 mb-4">
                        ₿ Binance (TRC20)
                     </h3>
                     <p className="text-gray-300 mb-2">
                        <span className="font-semibold">Wallet Address:</span>
                     </p>
                     <p className="text-gray-300 break-all bg-gray-700 p-3 rounded-lg text-sm">
                        TAQHarRn7rqH2vHEPqF2eqNpUtHfDmnVK3
                     </p>
                     <p className="text-gray-400 text-sm mt-2">
                        Send USDT (TRC20) to this address.
                     </p>
                  </div>
               </div>

               {/* Form */}
               <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-white text-center mb-6">
                     Complete Your Registration
                  </h2>
                  <p className="text-gray-300 text-center mb-6">
                     Fill in your details and upload the payment screenshot.
                     We'll activate your access within 24 hours.
                  </p>

                  <form
                     action={formEndpoint}
                     method="POST"
                     encType="multipart/form-data"
                     className="space-y-5"
                  >
                     {/* FormSubmit required fields */}
                     <input type="hidden" name="_captcha" value="false" />
                     <input
                        type="hidden"
                        name="_next"
                        value="https://your-site.com/join?success=true" // replace with your actual domain
                     />
                     {/* Enable file upload (requires professional plan) */}
                     <input type="hidden" name="_attachment" value="1" />

                     {/* First Name (required) */}
                     <div>
                        <label
                           htmlFor="first_name"
                           className="block text-sm font-medium text-gray-300 mb-1"
                        >
                           First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                           type="text"
                           id="first_name"
                           name="First Name"
                           required
                           className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="John"
                        />
                     </div>

                     {/* Last Name (optional) */}
                     <div>
                        <label
                           htmlFor="last_name"
                           className="block text-sm font-medium text-gray-300 mb-1"
                        >
                           Last Name
                        </label>
                        <input
                           type="text"
                           id="last_name"
                           name="Last Name"
                           className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="Doe"
                        />
                     </div>

                     {/* Email (required) */}
                     <div>
                        <label
                           htmlFor="email"
                           className="block text-sm font-medium text-gray-300 mb-1"
                        >
                           Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="Email"
                           required
                           className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="john@example.com"
                        />
                     </div>

                     {/* WhatsApp Number (required) */}
                     <div>
                        <label
                           htmlFor="whatsapp"
                           className="block text-sm font-medium text-gray-300 mb-1"
                        >
                           WhatsApp Number (with country code){" "}
                           <span className="text-red-400">*</span>
                        </label>
                        <input
                           type="tel"
                           id="whatsapp"
                           name="WhatsApp Number"
                           required
                           className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="+923001234567"
                        />
                     </div>

                     {/* Payment Screenshot (file upload) */}
                     <div>
                        <label
                           htmlFor="payment_screenshot"
                           className="block text-sm font-medium text-gray-300 mb-1"
                        >
                           Payment Screenshot{" "}
                           <span className="text-red-400">*</span>
                        </label>
                        <input
                           type="file"
                           id="payment_screenshot"
                           name="Payment Screenshot"
                           accept="image/*"
                           required
                           className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                           Upload a clear screenshot of your payment (JPG, PNG).
                        </p>
                     </div>

                     {/* Submit Button */}
                     <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
                     >
                        Submit & Join Group
                     </button>
                  </form>

                  {/* Optional: Success message if redirected with ?success=true */}
                  {/* You can handle this with client-side logic or a separate thank-you page */}
               </div>

               {/* Note about confirmation */}
               <p className="text-center text-gray-400 mt-8 text-sm">
                  After submitting, you will receive a confirmation email. We'll
                  contact you on WhatsApp within 24 hours to activate your
                  access.
               </p>
            </div>
         </main>
         <Footer />
      </>
   );
}
