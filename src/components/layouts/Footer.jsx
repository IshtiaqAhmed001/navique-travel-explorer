import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="footer sm:footer-horizontal p-10 max-w-11/12 mx-auto gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm opacity-80 max-w-xs leading-relaxed">
            Discover beautiful destinations and enjoy seamless travel
            experiences with Navique.
          </p>
        </div>

        {/* Services */}
        <nav className="space-y-2">
          <h6 className="footer-title opacity-90 tracking-wide">Services</h6>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Branding
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Design
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Marketing
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Advertisement
          </a>
        </nav>

        {/* Company */}
        <nav className="space-y-2">
          <h6 className="footer-title opacity-90 tracking-wide">Company</h6>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            About us
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Contact
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Jobs
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Press kit
          </a>
        </nav>

        {/* Legal */}
        <nav className="space-y-2">
          <h6 className="footer-title opacity-90 tracking-wide">Legal</h6>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Terms of use
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Privacy policy
          </a>
          <a className="link link-hover opacity-80 hover:opacity-100 transition">
            Cookie policy
          </a>
        </nav>
      </div>

      {/* Bottom line */}
      <div className="border-t border-neutral-content/10 text-center text-sm opacity-70 py-4">
        © {new Date().getFullYear()} Navique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
