import React from "react";

const Features = () => {
  const features = [
    {
      title: "Fast Performance",
      text: "Hamara system fast aur reliable hai, jo user experience ko enhance karta hai.",
    },
    {
      title: "Secure",
      text: "Data fully protected hai aur high-level security protocols follow kiye jate hain.",
    },
    {
      title: "User Friendly",
      text: "Interface simple aur easy to use hai, beginners ke liye bhi perfect.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-24 bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Features</h2>
        <p className="text-gray-600 mb-12">
          Ye hain kuch key features jo hamare product ya service ko unique banate hain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{f.title}</h3>
              <p className="text-gray-500">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;