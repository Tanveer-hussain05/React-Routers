import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 `bg-gradient-to-r` from-purple-200 via-pink-100 to-yellow-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          Hum se rabta karne ke liye neeche form ya details use karein.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Email
              </h3>
              <p className="text-gray-500">example@email.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Phone
              </h3>
              <p className="text-gray-500">+92 300 0000000</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Address
              </h3>
              <p className="text-gray-500">
                123 Street Name, City, Country
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;