'use client';
import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';

interface ClaimStatusesProps {
    amountReleased?: string;
    statuses?: {
        status?: string;
        date?: string;
        description?: string;
        active?: boolean
    } []
}

const statusesData = [
    {
        status: 'Released',
        date: 'August 28, 2023',
        description: 'Your application is being reviewed by an agent. Kindly wait for the approval of your claim.',
        active: true
    },
    {
        status: 'Approved',
        date: 'August 28, 2023',
        description: 'Your application is being reviewed by an agent. Kindly wait for the approval of your claim.',
        active: false
    },
    {
        status: 'In-Review',
        date: 'August 28, 2023',
        description: 'Your application is being reviewed by an agent. Kindly wait for the approval of your claim.',
        active: false
    },
    {
        status: 'Claim Submitted',
        date: 'August 28, 2023',
        description: 'Your application is being reviewed by an agent. Kindly wait for the approval of your claim.',
        active: false
    }
];

const ClaimStatuses: React.FC<ClaimStatusesProps> = ({
    amountReleased = '86,475.92', statuses = statusesData
}) => {

    const style = {
        borderRadius: 16,
        background: `#FFF`,
        /* Green Drop Shadow */
        boxShadow: `0px 0px 15px 0px rgba(0, 111, 74, 0.10)`
    };

    const [tab, setTab] = useState<any>();

    const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    return (
        <div className='status-card'>
            {/* Released Insurance Card */}
            <div className='max-w-[388px] h-[113px] px-8 py-5 ' style={style}>
                <div className='text-primary font-[700] text-[20px] leading-[27.32px]'>
                    Released Insurance
                </div>
                <div className='font-[400] text-[#212121] text-[24px] leading-[32.78px] mt-2'>
                    ₱ {amountReleased}
                </div>

            </div>
            {/* In-Review View */}
            {/* Status History */}
            {/* <div className='max-w-[388px] h-[563px] px-8 py-5 relative mt-6' style={style}>
                <div className='text-primary font-[700] text-[20px] leading-[27.32px]'>
                    Status History
                </div>
                <Timeline className='flex justify-start -ml-[300px]'>
                    {statuses.map((item,index) => (
                        <TimelineItem>
                            <TimelineSeparator>
                                {item.active ?
                                    <TimelineDot color='primary'/>
                                    :
                                    <TimelineDot/>
                                }
                                {index != statuses.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='font-[700] text-[#212121] text-[14px] leading-[19.12px]'>
                                    {item.status}
                                </div>
                                <div className='font-[400] text-[#9E9E9E] text-[11px] leading-[15.03px] mt-1'>
                                    {item.date}
                                </div>
                                <div className='font-[400] text-[#212121] text-[11px] leading-[15.03px] mt-1'>
                                    {item.description}
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div> */}
            {/* End of Status History */}

            {/* Approved View */}
            <div className='max-w-[388px] h-[563px] px-8 py-5 relative mt-6' style={style}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={handleChangeTab}>
                        <Tab value="qrCode" label="QR Code"/>
                        <Tab value="statusHistory" label="Status History" />
                    </Tabs>
                </Box>
                {tab == 'qrCode' ? 
                    <div className='mt-5'>
                        <div className='text-[14px] text-[#212121] font-[700] leading-[19.12px]'>
                            Approved Claim - QR Code
                        </div>
                        <div className='text-[11px] text-[#212121] font-[400] leading-[15.03px] mt-1'>
                            Download and present this QR Code when claiming insurance for ease of transaction.
                        </div>
                    </div>
                    :
                    <div>
                        Status History
                    </div>
                }
            </div>
            
        </div>
    );
};

export default ClaimStatuses;

