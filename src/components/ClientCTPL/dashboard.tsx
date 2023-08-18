import React from 'react'
import { NextPage } from 'next';
import { Button, Chip, Divider, Typography } from '@mui/material';
import { GuardCheckIcon, DownloadIcon } from '@/components/icons';

export type Props = {

}


const Dashboard: NextPage<Props> = ({ }) => {

    const style = {
        borderRadius: 16,
        background: `#FFF`,
        /* Green Drop Shadow */
        boxShadow: `0px 0px 15px 0px rgba(0, 111, 74, 0.10)`
    }
    const styleGreen = {
        borderRadius: 16,
        background: `#009865`,
        /* Green Drop Shadow */
        boxShadow: `0px 0px 15px 0px rgba(0, 111, 74, 0.10)`
    }
    return (
        <div className='parent'>
            {/* TOP */}
            <div className='grid grid-cols-12 gap-5'>

                <div style={style} className='lg:col-span-3 col-span-12 py-[1.4375rem] px-[1.75rem]'>
                    <Typography className='text-primary !font-bold text-sm'>
                        Policy Number
                    </Typography>
                    <Typography className='text-black text-2xl'>
                        9827-9583-7500
                    </Typography>
                </div>

                <div style={style} className='lg:col-span-3 col-span-12 py-[1.4375rem] px-[1.75rem]'>
                    <Typography className='text-primary !font-bold text-sm'>
                        Policy Validity
                    </Typography>
                    <Typography className='text-black text-2xl'>
                        May 23, 2024
                    </Typography>
                </div>

                <div style={style} className='lg:col-span-3 col-span-12 py-[1.4375rem] px-[1.75rem]'>
                    <Typography className='text-primary !font-bold text-sm'>
                        Insurance Limit
                    </Typography>
                    <Typography className='text-black text-2xl'>
                        ₱ 1,000,000.00
                    </Typography>
                </div>

                <div style={style} className='lg:col-span-3 col-span-12 py-[1.4375rem] px-[1.75rem]'>
                    <Typography className='text-primary !font-bold text-sm'>
                        Claimed Insurance
                    </Typography>
                    <Typography className='text-black text-2xl'>
                        ₱ 86,475.92
                    </Typography>
                </div>

            </div>
            {/* BOTTOM÷ */}

            {/* LEFT */}
            <div className='grid grid-cols-12 gap-5 pt-[1.6875rem]'>

                <div style={style} className='col-span-12 lg:col-span-8 py-[1.4375rem] px-[1.75rem]'>

                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-6 flex items-center'>
                            <Typography className='text-primary !font-bold text-[20px]'>
                                Account Overview
                            </Typography>
                        </div>
                        <div className='col-span-12 lg:col-span-6 flex lg:justify-end max-lg:pt-2'>
                            <Button variant="contained" disableElevation type='submit' className='w-[200px] '>
                                <DownloadIcon className='mr-[10px]' />  Download Policy
                            </Button>
                        </div>
                    </div>

                    <Divider light className='pb-[16px]' />

                    <div className='grid grid-cols-12 pt-[37px] pb-[13px]'>
                        <div className='col-span-12 flex items-center'>
                            <Typography className='text-primary !font-bold text-[16px]'>
                                Client Details
                            </Typography>
                        </div>
                    </div>

                    <div className='grid grid-cols-12'>

                        <div className='lg:col-span-5 col-span-12 flex flex-col'>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Name and Address of Insured
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    John Michael Dimayuga / San Mateo
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Business/Profession
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    BackPackers Travel & Tours
                                </Typography>
                            </div>
                        </div>

                        <div className='lg:col-span-4 col-span-12 flex flex-col '>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Confirmation of Cover No.
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    Confirmation of Cover No.
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Date Issued
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    May 23, 2023
                                </Typography>
                            </div>
                        </div>

                        <div className='lg:col-span-3 col-span-12 flex flex-col'>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Official Receipt No.
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    987654567
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Period of Insurance
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    May 23, 2023 - May 23, 2024
                                </Typography>
                            </div>
                        </div>


                    </div>

                    <Divider light className='pb-[44px]' />

                    <div className='grid grid-cols-12 pt-[37px] pb-[13px]'>
                        <div className='col-span-12 flex items-center'>
                            <Typography className='text-primary !font-bold text-[16px]'>
                                Vehicle Description
                            </Typography>
                        </div>
                    </div>

                    <div className='grid grid-cols-12 gap-x-5'>

                        <div className='lg:col-span-2 col-span-12 flex flex-col'>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Model
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px] truncate'>
                                    Xpander GLS A/T
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px] '>
                                    Serial/Chassis No.
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px] truncate'>
                                    1HGBH41JXMN109186
                                </Typography>
                            </div>
                        </div>

                        <div className='lg:col-span-2 col-span-12 flex flex-col'>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Make
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    Mitsubishi
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Motor No.
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px] truncate' >
                                    D4FAAU909580
                                </Typography>
                            </div>
                        </div>

                        <div className='lg:col-span-2 col-span-12 flex flex-col'>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Plate No.
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px] truncate'>
                                    NFT 3141
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    BLT File No.
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px] truncate'>
                                    123 ABC
                                </Typography>
                            </div>
                        </div>


                        <div className='lg:col-span-3 col-span-12 flex flex-col '>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Type of Body
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    MPV
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Authorized Capacity
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px]'>
                                    800
                                </Typography>
                            </div>
                        </div>

                        <div className='lg:col-span-3 col-span-12 flex flex-col'>
                            <div>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Color
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px] truncate'>
                                    Metallic Gray
                                </Typography>
                            </div>
                            <div className='pt-[19px]'>
                                <Typography className='text-[#9E9E9E] !text-[11px]'>
                                    Unladen Weight
                                </Typography>
                                <Typography className='text-black !font-bold !text-[14px] truncate'>
                                    1200
                                </Typography>
                            </div>
                        </div>


                    </div>
                </div>

                {/* RIGHt */}
                <div className='parent-right lg:col-span-4 col-span-12'>

                    <div className='grid grid-cols-12 gap-5 ' >

                        <div style={style} className='col-span-12 py-[1.4375rem] px-[1.75rem]'>
                            <Typography className='text-primary !font-bold text-sm pb-[22px]'>
                                Current Claim Status
                            </Typography>

                            <div className='flex rounded-lg p-[1.125rem]' style={{ border: `1px solid #F0F0F0` }}>
                                <div className='flex-grow'>
                                    <div className='flex gap-[10px]'>
                                        <div className='flex justify-center items-center '>
                                            <GuardCheckIcon />
                                        </div>

                                        <div>

                                            <div className='text-black text-[0.6875rem]'>
                                                Reference #
                                            </div>
                                            <div className='text-black text-sm'>
                                                9827-9583-7500
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-center items-end status-option'>
                                    <Chip label="New" variant="outlined" className='new' />
                                </div>

                            </div>

                        </div>

                        <div style={styleGreen} className='col-span-12 py-[1.4375rem] px-[34px] relative'>
                            <Typography className='text-white !font-bold !text-[30px] text-center'>
                                Auto Insurance
                            </Typography>
                            <Typography className='text-white !text-[11px] text-center'>
                                CTPL is mandatory vehicle insurance that covers bodily injury and death of third parties caused by a motor vehicle accident.
                            </Typography>
                            <picture className='flex justify-center items-center pt-[20px]' >
                                <img src='/svg/ctpl-with-car.svg' alt='ctpl-with-car' />
                            </picture>
                            <picture className='absolute bottom-[19px] right-[19px]' >
                                <img src='/svg/icon-logo-small.svg' alt='icon-logo-small' />
                            </picture>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Dashboard;
