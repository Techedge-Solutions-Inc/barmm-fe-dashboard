'use client';
import React, { Fragment, useState } from 'react'
import { NextPage } from 'next';
import _ from 'lodash';
import ListOfClaimsTable from '@/components/ClientCTPL/claims/ListOfClaimsTable';
import ClaimsCreation from '@/components/ClientCTPL/claims/Creation';

export type Props = {

}


const Claims: NextPage<Props> = ({ }) => {
    const [isCreation, setIsCreation] = useState<boolean>(false);

    const handleClick = (value: boolean) => {

        setIsCreation(value)
    }
    return (
        <Fragment>
            {!isCreation ?
                <ListOfClaimsTable onClick={handleClick} value={isCreation} />
                :
                <ClaimsCreation />
            }

        </Fragment>
    )
}

export default Claims;
