import React from 'react';

const PackageSkeleton = () => {
    return (
      <div className="card card-compact bg-base-200 shadow-lg rounded-xl animate-pulse">
        {/* Image Skeleton */}
        <div className="h-52 bg-base-300 rounded-t-xl skeleton"></div>

        {/* Content Skeleton */}
        <div className="card-body space-y-3">
          <div className="h-6 w-3/4 bg-base-300 rounded skeleton"></div>{" "}
          {/* Title */}
          <div className="h-4 w-1/2 bg-base-300 rounded skeleton"></div>{" "}
          {/* Duration */}
          <div className="h-5 w-1/4 bg-base-300 rounded skeleton"></div>{" "}
          {/* Price */}
          <div className="mt-4 h-10 w-32 bg-base-300 rounded skeleton"></div>{" "}
          {/* Button */}
        </div>
      </div>
    );
};

export default PackageSkeleton;