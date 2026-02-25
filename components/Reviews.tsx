export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Khan",
      role: "Forex Trader",
      content:
        "The mentorship completely changed my approach. Highly recommended!",
    },
    {
      name: "Ahmed Ali",
      role: "Beginner",
      content:
        "From zero to consistent profits in just 3 months. Thank you Badar!",
    },
    {
      name: "Fatima Zahra",
      role: "Investor",
      content: "The support and community are amazing. Worth every penny.",
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          REVIEWS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-gray-300">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{review.content}"</p>
              <div className="flex mt-3 text-yellow-400">{"★".repeat(5)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}