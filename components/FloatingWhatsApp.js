import Link from "next/link";

export default function FloatingWhatsApp() {
  const phoneNumber = "923189197268"; // Replace with actual number (include country code without +)
  const message = "Hello, I have a question about your Signals Group."; // Optional pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      Contact Us
    </a>
  );
}