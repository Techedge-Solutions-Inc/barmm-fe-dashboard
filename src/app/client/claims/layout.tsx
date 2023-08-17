'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/SideNav/Layout';
import TopBar from '@/components/TopBar/TopBar';
import Claims from './page';

const ClaimsLayout: React.FC = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  
    return (
        <div className='bg-[black]'>
            <TopBar title='Claims' isSideBarOpen={isSideBarOpen}></TopBar>
            <Sidebar onToggleCollapse={async () => {setIsSideBarOpen(!isSideBarOpen)}} isOpen={isSideBarOpen}>
                <Claims/>
            </Sidebar>
        </div>
    );
}

export default ClaimsLayout;
