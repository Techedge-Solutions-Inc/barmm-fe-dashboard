'use client';
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import classNames from "classnames";

interface LayoutProps {
  children: ReactNode;
  onToggleCollapse: () => {};
  isOpen: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, onToggleCollapse, isOpen }) => {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-row justify-start">
      <div className="mx-[20px] mt-[20px] absolute top-0">
        <Sidebar onToggleCollapse={onToggleCollapse}/>
      </div>
      <div className={classNames('bg-lightGreen flex-1 p-4 text-white overflow-scroll', isOpen ? 'pl-[373px]' : 'pl-[150px]')}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
          {children}
      </div>
    </div>
  );
};

export default Layout;
