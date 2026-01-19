import Logo from '@/components/Logo';
import React from 'react';

const loading = () => {
    return (
      <div className="flex flex-col gap-5 min-h-screen justify-center items-center">
        <h2 className="text-5xl font-bold animate-pulse ">Loading...</h2>
        <div className="animate-ping">
          <Logo />
        </div>
      </div>
    );
};

export default loading;