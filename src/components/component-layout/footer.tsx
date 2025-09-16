import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="text-gray-900 font-bold text-sm">:)</div>
              </div>
              <span className="text-xl font-semibold">BotHive</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              All-in-one AI Workplace that helps businesses operate smarter and
              scale faster
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kaching-hub"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Kaching Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Language</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm text-left">
                  English
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm text-left">
                  Tiếng Việt
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Kaching Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;