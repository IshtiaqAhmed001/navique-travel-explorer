"use server";

import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart, MdOutlineSchedule } from "react-icons/md";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { getSingleProduct } from "@/actions/server/travelPackage";

export async function generateMetadata({ params }) {
    const {id}= await params;
  const pkg = await getSingleProduct(id);
  if (!pkg) return { title: "Package Not Found | Navique" };

  return {
    title: `${pkg.title} | Navique`,
    description: pkg.description.slice(0, 150),
    alternates: {
      canonical: `https://navique.vercel.app/packages/${params.id}`,
    },
    openGraph: {
      title: `${pkg.title} | Navique`,
      description: pkg.description.slice(0, 150),
      url: `https://navique.vercel.app/packages/${params.id}`,
      siteName: "Navique",
      images: [{ url: pkg.image, width: 1200, height: 630, alt: pkg.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} | Navique`,
      description: pkg.description.slice(0, 150),
      images: [pkg.image],
    },
  };
}


const PackageDetails = async ({ params }) => {
    const {id}= await params;
    const pkg = await getSingleProduct(id);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      {/* Package Image */}
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title + Location */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">{pkg.title}</h1>
          <p className="text-gray-500 flex items-center gap-2">
            <FaMapMarkerAlt /> {pkg.location || "Unknown Location"}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <p className="text-xl font-semibold">${pkg.price}</p>
          <p className="flex items-center gap-1 text-yellow-500">
            <FaStar /> {pkg.rating || 4.5}
          </p>
        </div>
      </div>

      {/* Duration + Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <p className="text-gray-600 flex items-center gap-2">
          <MdOutlineSchedule /> Duration: {pkg.duration}
        </p>
        <div className="flex gap-3">
          <button className="btn btn-primary flex items-center gap-2">
            <MdOutlineShoppingCart /> Add to Cart
          </button>
          <button className="btn btn-accent">Book Now</button>
        </div>
      </div>

      {/* Description / Highlights */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">About this Package</h2>
        <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
      </div>

      {/* Optional Included/Excluded Features */}
      {pkg.info && pkg.info.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-3">What’s Included</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {pkg.info.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
