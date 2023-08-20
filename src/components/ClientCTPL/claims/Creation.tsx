import IncidentTypes from '@/components/IncidentTypes/IncidentTypes';
import TitleBar from '@/components/TitleBar/TitleBar';
import PlusIcon from '@/components/icons/PlusIcon';
import { NextPage } from 'next';
import { UploadIcon } from '@/components/icons';
import React, { Fragment, useState } from 'react';
import { Button, Typography, IconButton } from '@mui/material';

import { FileUploader } from "react-drag-drop-files";
import { Form, Formik, useFormikContext } from 'formik';
import _ from 'lodash'

import CancelIcon from '@mui/icons-material/Cancel';

import { CloseIconCircle, FileIcon } from '@/components/icons';

export type Props = {

}

const fileTypesIncident = ["JPG", "PNG", "JPEG"]
const fileTypesDocuments = [
    "jpg", "jpeg", "png", "pdf",     // Images and PDF
    "doc", "docx",                      // Word
    // ".xls", ".xlsx",                      // Excel
    // ".ppt", ".pptx"                       // PowerPoint
];
const ClaimsCreation: NextPage<Props> = ({ }) => {

    const [file, setFile] = useState(null);



    const style = {
        borderRadius: 16,
        background: `#FFF`,
        /* Green Drop Shadow */
        boxShadow: `0px 0px 15px 0px rgba(0, 111, 74, 0.10)`
    }

    const FormBody = () => {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            setFieldValue,
            isSubmitting
        } = useFormikContext<any>();


        const handleChangeIncident = (files: FileList | null) => {
            if (files) {
                Array.from(files).forEach((file) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {

                        // Update incidentImageData
                        const updatedImageData = [...values.incidentImageData, e?.target?.result as string];
                        setFieldValue('incidentImageData', updatedImageData);

                        // Safeguard to ensure incidentPhotosFile is an array
                        const currentFiles = Array.isArray(values.incidentPhotosFile) ? values.incidentPhotosFile : [];

                        // Update incidentPhotosFile
                        const updatedFiles = [...currentFiles, file];
                        setFieldValue('incidentPhotosFile', updatedFiles);
                    };
                });
            }
        };




        const handleRemoveImageAndFileIncident = (indexToRemove: number | string): void => {
            const updatedImages = values.incidentImageData.filter((_: any, index: number | string) => index !== indexToRemove);
            const updatedFiles = values.incidentPhotosFile.filter((_: any, index: number | string) => index !== indexToRemove);
            setFieldValue('incidentImageData', updatedImages);
            setFieldValue('incidentPhotosFile', updatedFiles);
        };




        const handleChangeDocument = (files: FileList | null) => {
            if (files) {
                Array.from(files).forEach((file) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {

                        // Update documentImageData
                        const updatedImageData = [...values.documentImageData, e?.target?.result as string];
                        setFieldValue('documentImageData', updatedImageData);

                        // Safeguard to ensure documentPhotosFile is an array
                        const currentFiles = Array.isArray(values.documentPhotosFile) ? values.documentPhotosFile : [];

                        // Update documentPhotosFile
                        const updatedFiles = [...currentFiles, file];
                        setFieldValue('documentPhotosFile', updatedFiles);
                    };
                });
            }
        };

        const handleRemoveImageAndFileDocument = (indexToRemove: number | string): void => {
            const updatedImages = values.documentImageData.filter((_: any, index: number | string) => index !== indexToRemove);
            const updatedFiles = values.documentPhotosFile.filter((_: any, index: number | string) => index !== indexToRemove);
            setFieldValue('documentImageData', updatedImages);
            setFieldValue('documentPhotosFile', updatedFiles);
        };


        const getFileTypeIcon = (fileType?: string) => {
            if (fileType && fileType.startsWith("image")) {
                return (<picture>
                    <img src='/svg/image-icon-small.svg' />
                </picture>)
                // Represents an image

            }
            if (fileType === "application/pdf") {
                return (<picture>
                    <img src='/svg/file-icon-small.svg' />
                </picture>)
                // Represents a PDF

            }
            return (<picture>
                <img src='/svg/file-icon-small.svg' />
            </picture>)
            // Represents generic documents

        };




        return (
        <div className='grid grid-cols-12 mt-8 gap-8'>

            <div style={style} className='col-span-12 lg:col-span-6 py-[20px] px-[28px]'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-6 flex items-center'>
                        <Typography className='!text-[20px] text-primary !font-[700]'>
                            Incident Photos
                        </Typography>

                    </div>
                    <div className='col-span-12 lg:col-span-6 flex justify-end'>


                        <FileUploader
                            multiple

                            onSizeError={(file: any) => console.log('onSizeError', file)}
                            onTypeError={(err: any) => console.log('onTypeError', err)}
                            handleChange={handleChangeIncident}
                            name={values.incidentPhotosFile}
                            types={fileTypesIncident} >
                            <Button variant="contained" disableElevation>
                                <UploadIcon />
                            </Button>
                        </FileUploader>

                    </div>
                </div>

                {values.incidentPhotosFile.length != 0 && values.incidentImageData.lenght != 0 ?
                    <div className='scrolling-wrapper mt-[23px] '>
                        {_.map(values.incidentImageData, (d, index) => {
                            return (
                                <div key={index} className='card-images card relative'>
                                    {/* <picture className='flex justify-center items-center '>
                                 <img src={d} className='object-contain w-[400px] '
                                     style={{

                                         maxHeight: '157px',

                                         backgroundSize: 'cover',  // this will ensure that the image scales correctly
                                         backgroundRepeat: 'no-repeat', // prevents image from repeating
                                         backgroundPosition: 'center' // centers the image
                                     }} />
                             </picture> */}

                                    <picture className='flex justify-center items-center relative'
                                        style={{
                                            // width: '400px',
                                            maxHeight: '157px',
                                            background: 'lightgray'
                                        }}>
                                        <img src={d}
                                            style={{
                                                width: '100%',
                                                maxHeight: '157px',
                                                objectFit: 'cover',
                                                verticalAlign: 'middle'  // to remove any bottom spacing
                                            }}
                                            alt="Description of Image" />
                                    </picture>
                                    <IconButton onClick={() => handleRemoveImageAndFileIncident(index)} className='top-0 right-0'
                                        style={{
                                            position: `absolute`,
                                        }}
                                    >
                                        <CloseIconCircle className='box-shadow[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] ' />
                                    </IconButton>

                                </div>
                            )
                        })}
                    </div>
                    :
                    <div className='rounded-[8px] bg-[#F4F4F4] flex justify-center items-center flex-col pt-[44px] pb-[56px] mt-[23px] overflow-hidden  '>

                        <Fragment>
                            <picture>
                                <img src='/svg/image.svg' />
                            </picture>
                            <Typography className='!text-[11px] text-black !font-bold  pt-[8px]'>
                                No Photos Uploaded
                            </Typography>
                        </Fragment>



                    </div>
                }

            </div>


            <div style={style} className='col-span-12 lg:col-span-6 py-[20px] px-[28px]'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-6 flex items-center'>
                        <Typography className='!text-[20px] text-primary !font-[700]'>
                            Required Documents
                        </Typography>

                    </div>
                    <div className='col-span-12 lg:col-span-6 flex justify-end'>


                        <FileUploader
                            multiple
                            onSizeError={(file: any) => console.log('onSizeError', file)}
                            onTypeError={(err: any) => console.log('onTypeError', err)}
                            handleChange={handleChangeDocument}
                            name={values.documentPhotosFile}
                            types={fileTypesDocuments} >
                            <Button variant="contained" disableElevation>
                                <UploadIcon />
                            </Button>
                        </FileUploader>

                    </div>
                </div>

                {values.documentPhotosFile.length != 0 && values.documentImageData.lenght != 0 ?

                    <div className='overflow-y-auto max-h-[157px]'>
                        {_.map(values.documentPhotosFile, (d, index) => {
                            return (
                                <div key={index} className='flex mt-[23px] bg-gray rounded-[8px] p-[20px] flex-nowrap overflow-y-auto w-full '>
                                    <div className='flex items-center w-full ' >
                                        <div>
                                            {getFileTypeIcon(d.type)}
                                        </div>
                                        <div className="px-[10px]">
                                            <Typography className='text-black !text-[11px] !font-bold'> {d.name}</Typography>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <IconButton onClick={() => handleRemoveImageAndFileDocument(index)} className='top-0 right-0'
                                            style={{
                                                // position: `absolute`,
                                            }}
                                        >
                                            <CloseIconCircle className='box-shadow[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] ' />
                                        </IconButton>
                                    </div>



                                </div>
                            )
                        })}
                    </div>

                    :
                    <div className='rounded-[8px] bg-[#F4F4F4] flex justify-center items-center flex-col pt-[44px] pb-[56px] mt-[23px] overflow-hidden  '>

                        <Fragment>
                            <picture>
                                <img src='/svg/file-icon.svg' />
                            </picture>
                            <Typography className='!text-[11px] text-black !font-bold  pt-[8px]'>
                                No Files Uploaded
                            </Typography>
                        </Fragment>



                    </div>
                }
            </div>


        </div >)
    }
    return (
        <div className='overflow-hidden'>
            <TitleBar
                title='Claim Insurance'
                titleColor='#009865'
                submitBtn='Submit Claim'
                cancelBtn='Cancel'
            />
            <IncidentTypes></IncidentTypes>


            <Formik
                enableReinitialize
                // validationSchema={loginValidationSchema}
                initialValues={{
                    incidentPhotosFile: [],
                    incidentImageData: [],

                    documentPhotosFile: [],
                    documentImageData: [],




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
    )
}

export default ClaimsCreation;
