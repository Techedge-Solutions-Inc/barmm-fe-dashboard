import IncidentTypes from '@/components/IncidentTypes/IncidentTypes';
import TitleBar from '@/components/TitleBar/TitleBar';
import PlusIcon from '@/components/icons/PlusIcon';
import React from 'react';

const ClaimsCreation = () => {
    return (
        <div>
            <TitleBar
                title='Claim Insurance'
                titleColor='#009865'
                submitBtn='Submit Claim'
                cancelBtn='Cancel'
            />
            <IncidentTypes></IncidentTypes>
        </div>
    )
}

export default ClaimsCreation;
