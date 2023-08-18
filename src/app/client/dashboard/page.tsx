import React from 'react'
import { NextPage } from 'next';
import { Button, Chip, Divider, Typography } from '@mui/material';
import { GuardCheckIcon, DownloadIcon } from '@/components/icons';
import Dashboard from '@/components/ClientCTPL/dashboard';

export type Props = {

}


const DashboardPage: NextPage<Props> = ({ }) => {


    return (
        <Dashboard />
    )
}

export default DashboardPage;
