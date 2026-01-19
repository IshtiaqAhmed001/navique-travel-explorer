import Packages from '@/components/home/Packages';
import React from 'react';

export const metadata = {
    title: "All Packages",
    description: "Journeys made simple",
};
const PackagesPage = () => {

    return (
        <div>
           <Packages/> 
        </div>
    );
};

export default PackagesPage;