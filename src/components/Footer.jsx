"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-600 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            {/* Logo with engagement rings */}
            <div className="flex items-center space-x-3">
              <span className="relative text-3xl">
                <span className="text-3xl">💖</span>
              </span>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">
                  𝓗𝓮𝓪𝓻𝓽𝓢𝔂𝓷𝓬
                </span>
                <span className="text-xs font-light text-black tracking-wider">
                  Where Hearts Find Harmony
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-pink-100 text-sm italic">
              Connecting hearts since {currentYear}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-1">
              <SocialIcon
                href="https://facebook.com"
                icon={
                  <FaFacebook
                    size={16}
                    className="hover:scale-110 transition-transform"
                  />
                }
              />
              <SocialIcon
                href="https://instagram.com"
                icon={
                  <FaInstagram
                    size={16}
                    className="hover:scale-110 transition-transform"
                  />
                }
              />
              <SocialIcon
                href="https://twitter.com"
                icon={
                  <FaTwitter
                    size={16}
                    className="hover:scale-110 transition-transform"
                  />
                }
              />
              <SocialIcon
                href="mailto:contact@aapsimilan.com"
                icon={
                  <FaEnvelope
                    size={16}
                    className="hover:scale-110 transition-transform"
                  />
                }
              />
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection
            title="Quick Links"
            links={[
              { href: "/", label: "Home" },
              { href: "/all-people", label: "Browse Profiles" },
              { href: "/register", label: "Create Profile" },
              { href: "/login", label: "Login" },
            ]}
          />

          {/* Support */}
          <FooterSection
            title="Support"
            links={[
              { href: "/contact", label: "Contact Us" },
              { href: "/faq", label: "FAQ" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
            ]}
          />

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-pink-100 text-sm">
              Get matchmaking tips and success stories
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-500/50 mt-10 pt-6 text-center">
          <p className="text-pink-200 text-sm">
            &copy; {currentYear}HeartSync. Made with{" "}
            <FaHeart className="inline text-pink-300 animate-pulse" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

// Reusable Components
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:scale-110"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
}

function FooterSection({ title, links }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-pink-100 hover:text-white text-sm transition-colors flex items-center space-x-2"
            >
              <span className="w-1 h-1 bg-pink-300 rounded-full"></span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-pink-500/50 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-pink-700 hover:bg-pink-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg"
      >
        Subscribe
      </button>
    </form>
  );
}
