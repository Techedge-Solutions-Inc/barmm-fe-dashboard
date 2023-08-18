import React from 'react';
import { Button, Chip } from '@mui/material';

interface TitleBarProps {
    title?: string;
    titleColor?: string;
    policyNumber?: string;
    policyNumberColor?: string;
    status?: string;
    cancelBtn?: string;
    cancelBtnIcon?: React.ReactNode;
    submitBtn?: string;
    submitBtnIcon?: React.ReactNode;
    onCancel?: () => {};
    onSubmit?: () => {};
};

const TitleBar:React.FC<TitleBarProps> = ({
    title, titleColor, policyNumber, policyNumberColor, status, cancelBtn, submitBtn, onCancel, onSubmit, submitBtnIcon, cancelBtnIcon
}) => {
    return (
        <div className='grid grid-cols-12 relative'>
            <div className='col-span-12 xl:col-span-6 flex'>
                <div className='text-[18px] md:text-[24px] font-[700]' style={{
                    color: titleColor
                }}>
                    {title}
                </div>
                {policyNumber &&
                    <div>
                        <div className='text-[#9E9E9E] text-[18px] md:text-[24px] font-[700] mx-2'>/</div>
                        <div className='text-[18px] md:text-[24px] font-[700]' style={{
                            color: policyNumberColor
                        }}>
                            {policyNumber}
                        </div>
                    </div>
                }
                {status &&
                    <div className='ml-4 -mt-1 md:mt-1 status-option'>
                        <Chip label={status} variant="outlined" className={status} />
                    </div>
                }
            </div>

            <div className='col-span-12 xl:col-span-6 xl:justify-end mt-2 xl:mt-0 flex gap-4'>
                { cancelBtn &&
                    <Button variant="outlined" disableElevation type='submit' className='w-[200px]'>
                        {cancelBtnIcon} <span className='ml-2'>{cancelBtn}</span>
                    </Button>
                }
                { submitBtn &&
                    <Button variant="contained" disableElevation type='submit' className='w-[200px]'>
                        {submitBtnIcon} <span className='ml-2'>{submitBtn}</span>
                    </Button>
                }
            </div>
        </div>
    );
};

export default TitleBar;
