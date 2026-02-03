import React from 'react'

const Product = () => {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized architecture and modern technologies."
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Built with security-first approach, ensuring your data is protected with enterprise-grade encryption."
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Responsive design that works perfectly on all devices, from mobile phones to desktop computers."
    },
    {
      icon: "⚡",
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows with our comprehensive API."
    },
    {
      icon: "🎨",
      title: "Modern UI/UX",
      description: "Beautiful, intuitive interface designed with user experience at the forefront of every decision."
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Get detailed insights and analytics to make data-driven decisions for your business growth."
    }
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how our product can transform your workflow and boost productivity
            with cutting-edge features designed for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-cyan-400/50 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product
