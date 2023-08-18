'use client';
import React, { Fragment, useState } from 'react'
import { NextPage } from 'next';
import _ from 'lodash';
import ListOfClaimsTable from '@/components/ClientCTPL/claims/listOfClaimsTable';
import ClaimsCreation from '@/components/ClientCTPL/claims/Creation';

export type Props = {

}


const Claims: NextPage<Props> = ({ }) => {
    const [isCreation, setIsCreation] = useState<boolean>(true);
    return (
        <Fragment>
            {!isCreation ?
                <ListOfClaimsTable />
                :
                <ClaimsCreation />
            }

        </Fragment>
    )
}

export default Claims;
