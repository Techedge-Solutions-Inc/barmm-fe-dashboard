// pages/index.js
import React from 'react';
import { Button, Container } from '@mui/material';
import TitleBar from '@/components/TitleBar/TitleBar';
import PlusIcon from '@/components/icons/PlusIcon';

const Home = () => {
    return (
        <TitleBar
            title='Transaction History'
            titleColor='#9E9E9E'
            policyNumber='87654356782'
            policyNumberColor='#009865'
            submitBtn='Claim Insurance'
            submitBtnIcon={<PlusIcon/>}
            cancelBtn='Cancel'
            status='in-review'
        ></TitleBar>
    );
};

export default Home;
