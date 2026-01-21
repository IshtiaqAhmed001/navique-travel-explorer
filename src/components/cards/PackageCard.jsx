import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import CartButton from "../buttons/CartButton";

const PackageCard = ({ pkg }) => {
  const {_id}=pkg;
  return (
    <div className="card card-compact bg-base-200 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <div className="relative w-full h-52">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover rounded-t-xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{pkg.title}</h2>
        <p className="text-sm text-gray-600">{pkg.duration}</p>
        <p className="text-lg font-semibold mt-2">${pkg.price}</p>
        <div className="card-actions mt-4 flex flex-col gap-2">
          <CartButton pkg={{...pkg,_id:_id.toString()}}></CartButton>

          <Link
            href={`/packages/${pkg._id}`}
            className="btn btn-outline btn-sm w-full text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
