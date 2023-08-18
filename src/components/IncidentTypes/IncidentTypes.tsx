
import React, { useState } from 'react'
import { DeathIcon, DisablementIcon, GuardCheckIcon, InjuryIcon, NotifCheck, NotifCheckInfo, OthersIcon } from '../icons'
import classNames from 'classnames';
import CheckIcon from '../icons/CheckIcon';

const IncidentTypes = () => {

    const style = {
        borderRadius: 16,
        background: `#FFF`,
        /* Green Drop Shadow */
        boxShadow: `0px 0px 15px 0px rgba(0, 111, 74, 0.10)`
    }

    const incidentData = [
        {
            name: 'Death Indemnity',
            icon: DeathIcon,
        },
        {
            name: 'Bodily Injuries',
            icon: InjuryIcon
        },
        {
            name: 'Disablement',
            icon: DisablementIcon
        },
        {
            name: 'Others',
            icon: OthersIcon
        }
    ];

    const [selectedIncidentTypes, setSelectedIncidentTypes] = useState<any>([]);

    const handleIncidentType = async (incidentName: string) => {
        let temp = await [...selectedIncidentTypes];
        if(temp.includes(incidentName)) {
            const tempIndex = temp.indexOf(incidentName);
            await temp.splice(tempIndex, 1);
        } else {
            await temp.push(incidentName);
        }

        await setSelectedIncidentTypes(temp);
    };

    return (
        <div>
            <div style={style} className='mt-8 p-5'>
                <div>
                    <div className='text-[20px] text-primary font-[700]'>
                        Incident Type
                    </div>
                    <div className='text-[11px] text-[#212121] font-[400]'>
                        Select one or more type of claims
                    </div>
                </div>

                <div className='grid grid-cols-12 mt-8 gap-8'>
                    {incidentData.map((item, index) => (
                        <div key={index} className='col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-3 relative'>
                            <div className={classNames('border-[2px] rounded-[8px] cursor-pointer', 
                                selectedIncidentTypes.includes(item.name) ? 'border-[#009865]' : 'border-[#E9ECEF]' )} 
                                onClick={() => handleIncidentType(item.name)}>
                                <div className='flex flex-col items-center justify-center p-[20px]'>
                                    <item.icon/>
                                    <span className='text-[black]'>{item.name}</span>
                                </div>
                            </div>
                            {selectedIncidentTypes.includes(item.name) &&
                                <div className='flex justify-center -mt-[14px]'>
                                    <CheckIcon></CheckIcon>
                                </div>
                            }
                        </div>
                    ))}
                </div>

                <div className='text-[#212121] font-[400] text-[11px] leading-[15.03px] mt-5'>
                    Death: Indemnity, Burial and Funeral Expenses; Bodily Injuries: Hospital Rooms, Laboratory Expenses, Surgical Expenses, Operational Expenses,
                    Medical Expenses, Drug and Medicine, and Ambulance Charge; Permanent Disabledment: Lost of use of body parts; Others: Incidental Expenses.
                </div>
            </div>
        </div>
    )
}

export default IncidentTypes;