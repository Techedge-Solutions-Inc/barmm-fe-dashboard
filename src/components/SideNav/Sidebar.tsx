'use client';
import classNames from "classnames";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useMemo, MouseEventHandler, useEffect } from "react";
import {
    ArticleIcon,
    CollapsIcon,
    HomeIcon,
    LogoIcon,
    LogoutIcon,
    UsersIcon,
    VideosIcon,
    ShieldIcon,
    DashboardIcon
} from "../icons";
import CollapsIconOutline from "../icons/CollapsIconOutline";

interface MenuItem {
    id: number;
    label: string;
    icon: typeof HomeIcon | any; // Assuming all your icons are React components with similar signatures
    link: string;
}

interface SidebarProps {
    onToggleCollapse: () => {};
}

const menuItems: MenuItem[] = [
    { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/client/dashboard" },
    { id: 2, label: "Claims", icon: ShieldIcon, link: "/client/claims" },
];

const Sidebar: React.FC<SidebarProps> = ({ onToggleCollapse }) => {
    const [toggleCollapse, setToggleCollapse] = useState<boolean>(false);
    const [isCollapsible, setIsCollapsible] = useState<boolean>(false);

    const router = useRouter();
    const pathname = usePathname();

    const wrapperClasses = classNames(
        "h-[calc(100vh-40px)] pt-8 pb-4 bg-light flex justify-between flex-col",
        {
            ["w-80"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        "p-4 rounded bg-light-lighter absolute right-0",
        {
            "rotate-180": toggleCollapse,
        }
    );

    const onMouseOver: MouseEventHandler<HTMLDivElement> = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
        onToggleCollapse();
    };

    return (
        <div
            className={classNames(wrapperClasses, 'rounded-[16px] relative')}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center pl-1 gap-4">
                        <LogoIcon />
                        <span
                            className={classNames("mt-2 text-lg font-medium text-text", {
                                hidden: toggleCollapse,
                            })}
                        >
                            Logo
                        </span>
                    </div>
                    {/* {isCollapsible && (
                        <button
                            className={collapseIconClasses}
                            onClick={handleSidebarToggle}
                        >
                            <CollapsIcon />
                        </button>
                    )} */}
                </div>

                <div className="flex flex-col items-start mt-24">
                    {menuItems.map(({ icon: Icon, ...menu }, index) => {
                        return (
                            <div className={classNames('flex items-center cursor-pointer hover:bg-light-lighter w-full overflow-hidden whitespace-nowrap px-4',
                                    pathname.includes(menu.link) ? 'bg-[#E8F5F0] border-l-[5px] border-[#009865]' : ''
                                )}
                                key={index}
                            >
                                <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
                                    <div>
                                        {pathname.includes(menu.link) ? <Icon /> : <Icon stroke={'#4E4E4E'}/> }
                                    </div>
                                    {!toggleCollapse && (
                                        <span className={classNames("text-[14px] font-[700] ml-4", 
                                            pathname.includes(menu.link) ? 'text-[#009865]' : 'text-[#212121]'
                                        )}
                                        >
                                            {menu.label}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <div>
                <div className={'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap mb-6 mt-6'}>
                    <div className={classNames('flex py-4 px-3 items-center w-full h-full', toggleCollapse ? 'justify-center' : 'px-8')}>
                        <div>
                            <LogoutIcon />
                        </div>
                        {!toggleCollapse && (
                            <span className={classNames("text-[14px] font-[700] ml-4")}>
                                Logout
                            </span>
                        )}
                    </div>
                </div>

                <div className={'border-[2px] border-[#CACECD] mx-5'}></div>

                <div className={'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap mb-6 mt-6'} 
                    onClick={handleSidebarToggle}
                >
                    <div className={classNames('flex py-4 px-3 items-center w-full h-full', toggleCollapse ? 'justify-center' : 'px-8')}>
                        <div>
                            <CollapsIconOutline />
                        </div>
                        {!toggleCollapse && (
                            <span className={classNames("text-[14px] font-[700] ml-4")}>
                                Collapse
                            </span>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
