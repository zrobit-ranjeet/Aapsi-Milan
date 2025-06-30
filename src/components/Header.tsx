import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo with improved styling */}
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <span className="text-3xl">💖</span>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">
                Aapsi Milan
              </span>
              <span className="text-xs font-light tracking-wider opacity-80">
                Where Hearts Find Harmony
              </span>
            </div>
          </div>

          {/* Navigation with better spacing and effects */}
          <nav className="flex space-x-6">
            <Link
              href="/"
              className="relative px-1 py-2 text-sm font-medium hover:text-pink-100 transition-colors duration-200 group"
            >
              Register
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-100 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/all-people"
              className="relative px-1 py-2 text-sm font-medium hover:text-pink-100 transition-colors duration-200 group"
            >
              All People
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-100 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/login"
              className="relative px-3 py-2 text-sm font-medium bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
