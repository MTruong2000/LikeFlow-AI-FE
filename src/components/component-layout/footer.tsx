import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold">LikeFlow</span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Transforming Business Operations with All-in-One AI
            </p>

            <ul className="space-y-2 mt-4 flex space-x-4">
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-white hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                >
                  <Facebook size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-white hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                >
                  <Instagram size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-white hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                >
                  <Twitter size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  className="text-white hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                >
                  <Linkedin size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com"
                  className="text-white hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                >
                  <Youtube size={20} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://blog.likeflow.ai/"
                  className="text-white hover:text-white transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.likeflow.ai/about/"
                  className="text-white hover:text-white transition-colors duration-200 text-sm"
                >
                  About Likeflow
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.likeflow.ai/affiliate-with-likeflow-ai/"
                  className="text-white hover:text-white transition-colors duration-200 text-sm"
                >
                  Affiliate with Us — Get Your Rewards Today!
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
                  href="https://blog.likeflow.ai/contact-likeflow-now/"
                  className="text-white hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.likeflow.ai/likeflow-privacy-policy/"
                  className="text-white hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.likeflow.ai/likeflow-terms-of-service/"
                  className="text-white hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
