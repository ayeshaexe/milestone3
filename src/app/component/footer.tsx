1// components/Footer.js
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook,FaFacebookMessenger,FaGithub,FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-300 bg-[black]">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">ABOUT FRONTEND FUSION</h2>
            <p className="text-sm leading-6">
              Frontend Fusion is your go-to platform for mastering frontend development. Discover
              tips, tutorials, and resources to level up your skills in web development and create
              seamless, responsive user interfaces.
            </p>
            <div className="flex space-x-4 mt-4 ">
            <FaInstagram className="h-[45px] w-[15px]"/>
            <FaTwitter className="h-[45px] w-[15px]"/>
            <FaFacebook className="h-[45px] w-[15px]"/>
            <FaFacebookMessenger className="h-[45px] w-[15px]"/>
            <FaGithub className="h-[45px] w-[15px]"/>
            <FaLinkedin className="h-[45px] w-[15px]"/>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase">News & Insights</h2>
            <p className="text-sm leading-6 mb-4">
              Stay updated with the latest trends, tips, and insights in frontend development.
              Subscribe to our NEWS and never miss a post from Frontend Fusion!
            </p>
            <div className="hidden md:flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring focus:ring-[#ff2525]"
              />
              <button className="px-4 py-2 bg-[#ff2525] text-white font-semibold rounded-r-md hover:bg-[#ff7474]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          <p>
            © {new Date().getFullYear()} All rights reserved | This template is made with ❤️ by
            <Link href="https://frontendfusion.com" className="text-[#ff2525] hover:underline ml-1">
              Frontend Fusion Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
