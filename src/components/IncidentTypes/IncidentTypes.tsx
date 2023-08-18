import React from 'react'

const IncidentTypes = () => {

    const style = {
        borderRadius: 16,
        background: `#FFF`,
        /* Green Drop Shadow */
        boxShadow: `0px 0px 15px 0px rgba(0, 111, 74, 0.10)`
    }

    return (
        <div>
            <div style={style} className=''>
                <div className='text-[20px] text-primary font-700'>
                    Incident Type
                </div>
                <div className='text-[11px] text-[#212121] font-[400]'>
                    Select one or more type of claims
                </div>
            </div>
        </div>
    )
}

export default IncidentTypes;