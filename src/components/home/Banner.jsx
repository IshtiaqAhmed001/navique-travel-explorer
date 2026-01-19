import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src="/assets/hero-banner.jpg" // your banner image
        alt="Tropical Beach Aerial"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-32 text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore the World with <span className="text-primary">NAVIQUE</span>
        </h1>
        <p className="mb-6 text-lg md:text-xl text-base-200">
          Discover curated travel packages, book your next adventure, and make
          memories that last a lifetime.
        </p>
        <div className="flex space-x-4">
          <a href="/packages" className="btn btn-primary btn-lg font-bold">
            View Packages
          </a>
          <a
            href="/contact"
            className="btn btn-accent btn-outline btn-lg font-bold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
