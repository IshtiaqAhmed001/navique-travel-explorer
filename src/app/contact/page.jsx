"use client";

import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Have a question about our travel packages or need support? We’d love
          to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <MdEmail size={22} />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-500">support@navique.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <MdLocationOn size={22} />
            </div>
            <div>
              <h4 className="font-semibold">Office</h4>
              <p className="text-sm text-gray-500">Melbourne, Australia</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            Our support team is available to help you plan your next journey and
            answer any questions about bookings or destinations.
          </p>
        </div>

        {/* Form */}
        <div className="bg-base-200 p-6 rounded-xl">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            />

            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
