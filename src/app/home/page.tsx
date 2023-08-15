// pages/index.js
import React from 'react';
import { Button, Container } from '@mui/material';

const Home = () => {
    return (
        <Container className="mt-10 text-center">
            <h1 className="text-4xl font-bold">Welcome to My App</h1>
            <Button variant="contained" color="primary" className="mt-4">
                Get Started
            </Button>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>
        </Container>
    );
};

export default Home;
