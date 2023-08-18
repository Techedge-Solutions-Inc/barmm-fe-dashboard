'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/SideNav/Layout';
import TopBar from '@/components/TopBar/TopBar';
import Page from './page'

const Posts: React.FC = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  return (
    <div className='bg-[black]'>
      <TopBar title='Dashboard' isSideBarOpen={isSideBarOpen}></TopBar>
      <Sidebar onToggleCollapse={async () => { setIsSideBarOpen(!isSideBarOpen) }} isOpen={isSideBarOpen}>
        <Page />
      </Sidebar>
    </div>
  );
}

export default Posts;
