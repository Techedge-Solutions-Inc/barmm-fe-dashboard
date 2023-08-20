import TitleBar from '@/components/TitleBar/TitleBar';
import React, { Fragment } from 'react'
import PlusIcon from '@/components/icons/PlusIcon';
import { NextPage } from 'next';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Pagination, Typography, Chip } from '@mui/material';
import { classNames, toKebabCase } from '@/utility/utility';
import _ from 'lodash';


export type Props = {
    onClick: (data: boolean) => void;
    value: boolean;
}



interface Column {
    id: any;
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
}
const columns: readonly Column[] = [
    { id: 'reference', label: 'Reference No.', minWidth: 115 },
    { id: 'claimType', label: 'Claim type', minWidth: 400 },
    {
        id: 'fileData',
        label: 'File Date',
        minWidth: 135,
        // align: 'center',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'releaseDate',
        label: 'Release Date',
        minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'claim',
        label: 'Claim',
        minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toFixed(2),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        // format: (value: number) => value.toFixed(2),
    }
];

// function createData(
//     name: string,
//     code: string,
//     population: number,
//     size: number,
// ): Data {
//     const density = population / size;
//     return { name, code, population, size, density };
// }

const rows: any = [
    {
        id: 0,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures',
        fileData: 'Aug 22, 2023',
        releaseDate: '-',
        claim: '-',
        status: 'new',

    }, {
        id: 1,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    }, {
        id: 2,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    }, {
        id: 3,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures',
        fileData: 'Aug 22, 2023',
        releaseDate: '-',
        claim: '-',
        status: 'new',

    }, {
        id: 4,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures',
        fileData: 'Aug 22, 2023',
        releaseDate: '-',
        claim: '-',
        status: 'new',

    }, {
        id: 5,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures',
        fileData: 'Aug 22, 2023',
        releaseDate: '-',
        claim: '-',
        status: 'new',

    }, {
        id: 6,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures',
        fileData: 'Aug 22, 2023',
        releaseDate: '-',
        claim: '-',
        status: 'new',

    }, {
        id: 7,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures',
        fileData: 'Aug 22, 2023',
        releaseDate: '-',
        claim: '-',
        status: 'new',

    }, {
        id: 8,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures',
        fileData: 'Aug 22, 2023',
        releaseDate: '-',
        claim: '-',
        status: 'new',

    }, {
        id: 9,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    }, {
        id: 10,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    }, {
        id: 11,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    }, {
        id: 12,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    }, {
        id: 13,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    }, {
        id: 14,
        reference: '87654356782',
        claimType: 'Death Indemnity, Bodily Injures & Fractures2',
        fileData: 'Aug 22, 2023',
        releaseDate: 'Aug 31, 2023',
        claim: '₱86,975.92',
        status: 'released',
    },];

const ListOfClaimsTable: NextPage<Props> = ({ onClick, value }) => {

    const [page, setPage] = React.useState(0); 2
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Fragment>

            <div className='py-[24px]'>
                <TitleBar
                    title='Transaction History'
                    titleColor='#009865'
                    // policyNumber='87654356782'
                    // policyNumberColor='#009865'
                    submitBtn='Claim Insurance'
                    onSubmit={() => {
                        
                        onClick(!value)
                    }}
                    submitBtnIcon={<PlusIcon />}
                // cancelBtn='Cancel'
                // status='in-review'
                ></TitleBar>
            </div>

            <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: `0px 0px 15px 0px rgba(0, 111, 74, 0.10)`, borderRadius: 5 }}>
                <TableContainer className='custom-table mt-[15px] mx-[23px]' sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontSize: 14, color: '#9E9E9E', borderBottomWidth: 2 }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: any) => {

                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];

                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {
                                                            column?.id !== 'status' ?
                                                                <>
                                                                    <Typography className='text-sm text-black font-normal' noWrap>{value}</Typography>
                                                                    {/* {value} */}
                                                                </>
                                                                :
                                                                <div>
                                                                    <div className='flex justify-center items-end status-option'>
                                                                        <Chip label={_.upperFirst(value)} variant="outlined" className={classNames(toKebabCase(value))} />
                                                                    </div>
                                                                </div>
                                                        }



                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='flex justify-center items-center py-[30px]'>
                    <Pagination
                        className='pagination-custom'
                        count={Math.ceil(rows.length / rowsPerPage)}
                        color="primary"
                        page={page + 1} // because MUI's Pagination is 1-based, while TablePagination is 0-based
                        onChange={(event, newPage) => handleChangePage(event, newPage - 1)}
                    />
                </div>

            </Paper>

        </Fragment>
    )
}

export default ListOfClaimsTable;
