import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 animate-pulse">
      {/* Skeleton for Package Image */}
      <div className="w-full h-96 bg-gray-300 rounded-2xl mb-8"></div>

      {/* Skeleton for Title + Location */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-col gap-2">
          <div className="w-64 h-8 bg-gray-300 rounded"></div>
          <div className="w-32 h-5 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="w-20 h-6 bg-gray-300 rounded"></div>
          <div className="w-12 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Skeleton for Duration + Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="w-40 h-5 bg-gray-200 rounded"></div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <div className="w-32 h-10 bg-gray-300 rounded"></div>
          <div className="w-24 h-10 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skeleton for Description */}
      <div className="mb-6 space-y-2">
        <div className="w-48 h-6 bg-gray-300 rounded"></div>
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Skeleton for Included Items */}
      <div className="space-y-2">
        <div className="w-40 h-6 bg-gray-300 rounded"></div>
        <ul className="space-y-1">
          <li className="w-full h-4 bg-gray-200 rounded"></li>
          <li className="w-5/6 h-4 bg-gray-200 rounded"></li>
          <li className="w-3/4 h-4 bg-gray-200 rounded"></li>
        </ul>
      </div>
    </div>
  );
};

export default Loading;
