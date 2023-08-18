// pages/index.js
"use client"
import React from 'react';
import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import backgroundImage from '@/../public/images/background-image.png'
import Image from 'next/image';
import { TextField } from '@mui/material';
import { NextPage } from 'next';
// Formik
import * as yup from 'yup';
import { Form, Formik, FormikHelpers, FormikProps, useFormikContext } from 'formik';
import { REQUIRED_VALIDATOR } from '@/utility/CustomValidators'
import { TLogin } from '@/utility/interface/authentication';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export type Props = {

}

const Home: NextPage<Props> = ({

}) => {



    const loginValidationSchema = yup.object({
        policyNumber: REQUIRED_VALIDATOR,
        lastName: REQUIRED_VALIDATOR
    });


    const FormBody = () => {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            setFieldValue,
            isSubmitting
        } = useFormikContext<TLogin>();


        const handleClickShowPassword = () => setFieldValue('showPassword', !values.showPassword);

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };
        return (

            <div className='"w-full bg-white rounded-[1.25rem] '
                style={{
                    boxShadow: `0px 0px 30px 0px #00000040`
                }} >
                <div className='md:py-[2.8125rem] md:px-[4.6875rem] sm:py-[15px] sm:px-[25px]  py-[15px] px-[25px]'>

                    <div className='grid gap-9'>
                        <div>
                            <div className='font-bold text-[1.8125rem] leading-[40px]'>
                                Sign In
                            </div>
                            <div className='text-[1rem] leading-[21px] text-[#212121]'>
                                Please use your assigned credentials.
                            </div>
                        </div>
                        {/* FORM */}
                        <div className='grid gap-4 '>
                            <TextField
                                fullWidth
                                hiddenLabel
                                variant="outlined"
                                placeholder="Policy Number"

                                InputProps={{
                                    autoComplete: 'off'
                                }}
                                required
                                onBlur={handleBlur} // This apparently updates `touched`?

                                value={values?.policyNumber}
                                onChange={(e) => setFieldValue('policyNumber', e.target.value)}
                                error={Boolean(errors?.policyNumber) && touched?.policyNumber}
                                helperText={touched?.policyNumber && errors?.policyNumber}
                            />
                            <TextField
                                fullWidth
                                hiddenLabel
                                variant="outlined"
                                placeholder="Last Name"
                                InputProps={{
                                    autoComplete: 'off',
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}


                                required
                                onBlur={handleBlur} // This apparently updates `touched`?
                                type={values.showPassword ? 'text' : 'password'}
                                value={values?.lastName}
                                onChange={(e) => setFieldValue('lastName', e.target.value)}
                                error={Boolean(errors?.lastName) && touched?.lastName}
                                helperText={touched?.lastName && errors?.lastName}

                            />

                        </div>
                        <Button variant="contained" disableElevation fullWidth type='submit'>
                            Login
                        </Button>
                        <picture className='flex items-center justify-center'>
                            <img src='/images/barmm-logo.png' alt='logo' />
                        </picture>
                    </div>
                </div>


            </div>

        )
    }
    return (

        <div
            // className='w-full h-96'
            style={{
                width: '100%',
                height: `100vh`,
                // backgroundImage: backgroundImage.src,
                backgroundImage: `url('/images/background-image.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='flex items-center justify-center h-full'>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{

                        policyNumber: '',
                        lastName: '',
                        showPassword: false
                    }}
                    onSubmit={async (formValues, { setSubmitting }) => {
                        // const formData = {
                        //     username: formValues.username,
                        //     password: formValues.password
                        // }

                        // await setSubmitting(true);
                        // await onHandleLogin(formData);
                        // await setSubmitting(false);
                    }}
                >
                    <Form>
                        <FormBody />
                    </Form>
                </Formik>

            </div>
        </div>

    );
};

export default Home;
