import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Homefront</h3>
            <p className="text-gray-400 text-sm">
              Turn every completed home into recurring revenue.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/#how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
              Pricing
            </Link>
            <Link href="/demo" className="text-gray-400 hover:text-white text-sm transition-colors">
              Demo
            </Link>
            <Link href="/login" className="text-gray-400 hover:text-white text-sm transition-colors">
              Login
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Homefront. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built by a builder, for builders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
