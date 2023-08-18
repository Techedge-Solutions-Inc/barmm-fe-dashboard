'use client';
import ClaimsCreation from '@/components/ClientCTPL/claims/Creation';
import React, {useState} from 'react';

const Claims = () => {
    const [isCreation, setIsCreation] = useState<boolean>(true);
    return (
        <div className='border-2 border-black'>
            {!isCreation ?
                'Claims Table'
                :
                <ClaimsCreation/>
            }
        </div>
    )
}

export default Claims;
