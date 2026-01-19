import React from 'react';
import travelData from '@/data/travelData.json'
import PackageCard from '../cards/PackageCard';
import { getProducts } from '@/actions/server/travelPackage';

const Packages = async () => {
    const packages = await getProducts() || [];
    return (
      <div>
        <h2 className="text-center text-4xl font-bold mb-10">Our Packages</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((data) => (
            <PackageCard key={data.title} pkg={data} />
          ))}
        </div>
      </div>
    );
};

export default Packages;