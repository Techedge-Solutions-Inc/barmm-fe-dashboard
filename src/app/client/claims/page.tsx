
import React, { Fragment } from 'react'
import { NextPage } from 'next';
import _ from 'lodash';
import ListOfClaimsTable from '@/components/ClientCTPL/claims/listOfClaimsTable';


export type Props = {

}


const Claims: NextPage<Props> = ({ }) => {

    return (
        <Fragment>
            <ListOfClaimsTable />
        </Fragment>
    )
}

export default Claims;
