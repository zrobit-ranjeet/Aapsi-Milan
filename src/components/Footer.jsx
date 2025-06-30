"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💖</span>
              <span className="text-2xl font-bold">Aapsi Milan</span>
            </div>
            <p className="text-pink-100">
              Where hearts find harmony since 2023
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-200 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-200 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-pink-200 transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-pink-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-people"
                  className="hover:text-pink-200 transition"
                >
                  Browse Profiles
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-pink-200 transition"
                >
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-pink-200 transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-pink-200 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-pink-200 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-pink-200 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-pink-200 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-pink-100 mb-4">
              Subscribe to our newsletter for matchmaking tips and success
              stories
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-200 w-full focus:outline-none border border-pink-800"
              />
              <button
                type="submit"
                className="bg-pink-800 hover:bg-pink-900 px-4 py-2 rounded-r-lg transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-500 mt-8 pt-8 text-center text-pink-200">
          <p>
            &copy; {currentYear} Aapsi Milan. Made with{" "}
            <FaHeart className="inline text-pink-300" /> in Ranjeet
          </p>
        </div>
      </div>
    </footer>
  );
}
