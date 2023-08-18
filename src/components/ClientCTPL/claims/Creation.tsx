import TitleBar from '@/components/TitleBar/TitleBar';
import PlusIcon from '@/components/icons/PlusIcon';
import React from 'react';

const ClaimsCreation = () => {
    return (
        <div>
            <TitleBar
                title='Claim Insurance'
                titleColor='#9E9E9E'
                submitBtn='Submit Claim'
                cancelBtn='Cancel'
            />
        </div>
    )
}

export default ClaimsCreation;
