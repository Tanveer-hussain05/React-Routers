import React from "react";

const Testimonial = () => {
  const testmonial = [
    {
      name: "Ali Khan",
      role: "CEO, Company A",
      text: "Yeh product hamare business ke liye game changer sabit hua. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sara Ahmed",
      role: "Designer, Startup B",
      text: "Interface simple aur easy to use hai. Team support bhi bohot acha hai.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Omar Raza",
      role: "Developer, Tech C",
      text: "Performance fast aur reliable hai. Main daily use ke liye recommend karunga.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section id="testimonials" className={`w-full py-24 bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">
          Humare satisfied clients ke reviews dekhiye.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testmonial.map((t, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-purple-300"
              />
              <p className="text-gray-700 mb-6">"{t.text}"</p>
              <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;