import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      text: "This platform has completely transformed how we manage our projects. The intuitive interface and powerful features have increased our team's productivity by 40%.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO, StartupXYZ",
      text: "The analytics and reporting capabilities are outstanding. We can now make data-driven decisions with confidence. The customer support team is also incredibly responsive.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Designer, Creative Agency",
      text: "Beautiful design meets powerful functionality. Our clients love the polished interface, and our team loves how easy it is to collaborate and iterate on projects.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Founder, InnovateLab",
      text: "From day one, this solution has exceeded our expectations. The scalability and reliability have been crucial as we've grown from 5 to 50+ team members.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      role: "Operations Director, GlobalTech",
      text: "The automation features have saved us countless hours. What used to take our team days now gets done in hours. This is a game-changer for our operations.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Developer, CodeWorks",
      text: "The API is well-documented and the integrations are seamless. We've been able to connect this with all our existing tools without any issues.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and teams
            around the world are saying about our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-cyan-400/50 group"
            >
              <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-600 group-hover:border-cyan-400 transition-colors"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-500">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;