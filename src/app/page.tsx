// pages/index.js
import React from 'react';
import ClaimStatuses from '@/components/ClaimStatuses';

const Home = () => {
    return (
        <div className='pt-[50px] pl-[50px] bg-[#e9ecef]'>
            <ClaimStatuses></ClaimStatuses>
        </div>
    );
};

export default Home;
