import PackageSkeleton from '@/components/skeleton/PackageSkeleton';
import React from 'react';

const loading = () => {
    return (
      <div className="grid md:grid-cols-3 gap-5">
        {Array.from({ length: 9 }).map((_, index) => (
          <PackageSkeleton key={index} />
        ))}
      </div>
    );
};

export default loading;