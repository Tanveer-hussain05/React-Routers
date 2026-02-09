import React from "react";
import Container from "../../components/Contaier";
import Button from "../../ui/Buttons";

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description:
        "Experience blazing-fast loading times and smooth interactions with our optimized architecture and modern technologies.",
      benefits: ["< 100ms response time", "99.9% uptime", "Global CDN"],
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description:
        "Your data is protected with bank-level encryption, regular security audits, and compliance with industry standards.",
      benefits: ["256-bit encryption", "SOC 2 compliant", "Regular audits"],
    },
    {
      icon: "🎨",
      title: "Intuitive Design",
      description:
        "Beautiful, user-friendly interface designed with accessibility and usability at the forefront of every decision.",
      benefits: [
        "WCAG 2.1 compliant",
        "Mobile-first design",
        "Dark mode support",
      ],
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description:
        "Connect with your favorite tools and platforms through our comprehensive API and pre-built integrations.",
      benefits: ["RESTful API", "200+ integrations", "Webhook support"],
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Get deep insights into your data with powerful analytics tools, custom reports, and real-time dashboards.",
      benefits: [
        "Real-time metrics",
        "Custom dashboards",
        "Export capabilities",
      ],
    },
    {
      icon: "🤖",
      title: "AI-Powered Features",
      description:
        "Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance productivity.",
      benefits: [
        "Smart automation",
        "Predictive analytics",
        "Natural language processing",
      ],
    },
  ];

  return (
    <section id="features">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the tools and capabilities that make our platform the
              perfect choice for businesses looking to scale and succeed in
              today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-cyan-400/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their
                workflow with our platform.
              </p>

              <Button title="Start Your Free Trial" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
