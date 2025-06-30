"use client";
import Link from "next/link";
import {
  FaHeart,
  FaSearch,
  FaCheck,
  FaHeartbeat,
  FaArrowRight,
} from "react-icons/fa";
// import { GiWeddingRings } from "react-icons/gi";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Find Your <span className="text-pink-600">Perfect Match</span>{" "}
              with HeartSync
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Trusted by thousands of families to create meaningful, lifelong
              connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <FaSearch /> Search Profiles
              </button>
              <Link href="/register">
                <button className="bg-white border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                  <FaHeart /> Register Free
                </button>
              </Link>
            </div>

            <div className="space-y-3">
              {[
                "100% Verified Profiles",
                "AI-Powered Matching",
                "Family Involvement Options",
                "Secure & Private",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <FaCheck className="text-pink-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="bg-pink-100 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/couple.jpg"
                alt="Happy couple"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HeartSync
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeartbeat className="text-3xl text-pink-600" />,
                title: "Smart Matching",
                description:
                  "Our advanced algorithm finds compatible matches based on your preferences",
              },
              {
                icon: <FaCheck className="text-3xl text-pink-600" />,
                title: "Verified Profiles",
                description:
                  "Every profile is manually verified for authenticity and safety",
              },
              {
                icon: <FaHeart className="text-3xl text-pink-600" />,
                title: "Privacy Focused",
                description:
                  "Control who sees your information with our privacy settings",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white">
        {/* Section Header - Your Content On Top */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Begin Your Journey to Forever
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Where tradition meets technology to create lifelong connections
          </p>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image Collage */}
            <div className="relative h-full min-h-[400px] order-last lg:order-first">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl z-10">
                <img
                  src="/images/couple-3.jpg"
                  alt="Happy couple embracing"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Secondary Image */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20">
                <img
                  src="/images/couple-2.jpg"
                  alt="Couple smiling"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent Shape */}
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-pink-100 rounded-2xl z-0"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaHeart className="text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-pink-700">
                  Why Choose Us
                </h3>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Trusted by thousands of families
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                HeartSync combines modern matchmaking technology with
                traditional values to help you find your perfect life partner.
              </p>

              <ul className="space-y-3">
                {[
                  "✓ Verified profiles for genuine connections",
                  "✓ Compatibility-based matching algorithm",
                  "✓ Family involvement options",
                  "✓ Secure and private platform",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <FaHeart className="text-xs text-pink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/register-form">
                <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3.5 rounded-lg font-medium shadow-lg transition-all flex items-center gap-3 group">
                  <span>Find Your Match</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-pink-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-16 w-12 h-12 bg-pink-300 rounded-full opacity-20"></div>
      </section>
    </div>
  );
}
