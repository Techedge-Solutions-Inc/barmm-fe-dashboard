'use client';
import ClaimsCreation from '@/components/ClientCTPL/claims/Creation';
import React, {useState} from 'react';

const Claims = () => {
    const [isCreation, setIsCreation] = useState<boolean>(true);
    return (
        <div>
            {!isCreation ?
                'Claims Table'
                :
                <ClaimsCreation/>
            }
        </div>
    )
}

export default Claims;
