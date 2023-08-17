// pages/index.js
import React from 'react';
import { Button, Container } from '@mui/material';
import backgroundImage from '@/../public/images/background-image.png'
import Image from 'next/image';
import { TextField } from '@mui/material';
import { NextPage } from 'next';
// Formik
import * as yup from 'yup';
import { Form, Formik, FormikHelpers, FormikProps, useFormikContext } from 'formik';
import Login from '@/components/login'
export type Props = {

}

const Home: NextPage<Props> = ({

}) => {
    return (

        <Login />

    );
};

export default Home;
