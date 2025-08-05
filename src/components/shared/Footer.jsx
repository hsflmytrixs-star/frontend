import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-base-content">
      {/* Friends and Partners of HSRL Slider */}
      <div className="h-96 py-8 md:px-12 lg:px-24 bg-white shadow-inner border-t-2 border-b-2 border-black">
        <h5 className="text-center text-2xl font-semibold mb-6">
          Friends and Partners of HSRL
        </h5>

        {/* Auto-scrolling carousel container */}
        <div className="overflow-hidden relative mt-20" style={{ height: 90 }}>
          {/* Scrolling track */}
          <div
            className="flex space-x-15 absolute top-0 left-0 h-full animate-marquee"
            style={{ width: "max-content" }}
          >
            {[
              "/Friends And Partners/mini_1997-School-Renamed-to-American-School-of-Doha4.png",
              "/Friends And Partners/Screenshot%202025-07-23%20at%202.14.10%E2%80%AFPM.png",
              "/Friends And Partners/Screenshot%202025-07-23%20at%202.21.16%E2%80%AFPM.png",
              "/Friends And Partners/524f3e_d6380b3cd3e7448abef386f82a854e86~mv2.avif",
              "/Friends And Partners/BCRCF%20Logos%20Final[1]-06.png",
              "/Friends And Partners/BCRCF%20Logos%20Final[1]-07.png",
              "/Friends And Partners/logo.png",
              "/Friends And Partners/logo%20(1).png",
            ]
              .concat([
                "/Friends And Partners/mini_1997-School-Renamed-to-American-School-of-Doha4.png",
                "/Friends And Partners/Screenshot%202025-07-23%20at%202.14.10%E2%80%AFPM.png",
                "/Friends And Partners/Screenshot%202025-07-23%20at%202.21.16%E2%80%AFPM.png",
                "/Friends And Partners/524f3e_d6380b3cd3e7448abef386f82a854e86~mv2.avif",
                "/Friends And Partners/BCRCF%20Logos%20Final[1]-06.png",
                "/Friends And Partners/BCRCF%20Logos%20Final[1]-07.png",
                "/Friends And Partners/logo.png",
                "/Friends And Partners/logo%20(1).png",
              ])
              .map((src, i) => (
                <Link key={i} to="/" className="block flex-shrink-0">
                  <img
                    src={src}
                    alt={`Partner ${i + 1}`}
                    className="h-24 object-contain"
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="flex flex-col sm:flex-row justify-between p-10 max-w-[1280px] mx-auto">
        {/* Logo Section */}
        <div className="mb-8 sm:mb-0">
          <img
            src="/Assets/BCRCF Logos Final[1]-05.png"
            alt="HSRL Logo"
            className="h-28 object-contain"
          />
        </div>

        {/* Links Section */}
        <nav className="mb-8 sm:mb-0">
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="link link-hover">
                About
              </Link>
            </li>
            <li>
              <Link to="/regeneration-hubs/bardiya" className="link link-hover">
                Regeneration Hubs
              </Link>
            </li>
            <li>
              <Link to="/about" className="link link-hover">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link link-hover">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Section */}
        <nav>
          <h6 className="footer-title mb-4 text-lg font-semibold">Social</h6>
          <div className="grid grid-flow-col gap-6">
            {/* Facebook */}
            <Link
              to="https://www.facebook.com/profile.php?id=61579018766325&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition"
            >
              <FaFacebookF className="w-[24px] h-[24px]" />
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/schoolofregeneration/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition"
            >
              <FaInstagram className="w-[24px] h-[24px]" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/schoolofregeneration/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition"
            >
              <FaLinkedinIn className="w-[24px] h-[24px]" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@nepalconservationtravel7791"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-primary transition"
            >
              <FaYoutube className="w-[24px] h-[24px]" />
            </a>
            {/* Email */}
            <a
              href="mailto:dakshinakhadka700@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:text-primary transition"
            >
              <FaEnvelope className="w-[24px] h-[24px]" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9843376717"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-primary transition"
            >
              <FaWhatsapp className="w-[24px] h-[24px]" />
            </a>
          </div>
        </nav>
      </div>

      {/* Inline styles for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
