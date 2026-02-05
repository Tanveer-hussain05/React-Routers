import React from "react";
import Button from "../../ui/Buttons";
import Container from "../../components/Contaier";

const Hero = () => {
  return (
    <Container>
    <div className="">
      
      <div className="absolute inset-0 bg-grid-slate-700 he class  `mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]` -z-10" />
      <div className="absolute top-0 right-0 -z-10">
        <div className="w-96 h-96 bg-linear-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="w-96 h-96 bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Design with{" "}
              <span className="bg-linear-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Impact
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
              Create stunning digital experiences with modern design principles.
              Build beautiful, functional websites that captivate your audience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button title="Get Started" />
              <Button title="Learn More" />
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300 border border-slate-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Lightning Fast
                    </h3>
                    <p className="text-gray-400">Optimized performance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Speed</span>
                    <span className="text-sm font-semibold text-green-400">
                      99%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="v from-cyan-500 to-blue-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>

              {/* Remaining floating element */}
              <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-xl p-3 shadow-lg animate-pulse">
                <svg
                  className="w-6 h-6 text-green-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Hero;
