// pages/index.js
import React from 'react';
import ClaimStatuses from '@/components/ClaimStatuses';

const Home = () => {
    return (
        <div className='pt-[50px] pl-[50px] bg-[#e9ecef]'>
            <ClaimStatuses 
                status={"RELEASED"}
                claims={{
                    referenceNo: 87654356782,
                    name: 'John Michael Dimayuga',
                    policyNumber: '9827-9583-7500'
                }}
            ></ClaimStatuses>
        </div>
    );
};

export default Home;
