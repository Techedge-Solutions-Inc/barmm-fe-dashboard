import classNames from 'classnames';
import React from 'react';

interface TopBarProps {
    title?: string;
    isSideBarOpen?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
    title, isSideBarOpen
}) => {
    return (
        <div className="h-[100px] bg-[url('/static/assets/topNavBg.svg')] flex items-center">
            <div className={classNames('font-[700] text-[#FFFFFF] text-[29px] leading-[39.61px]', isSideBarOpen ? 'pl-[370px]' : 'pl-[150px]')}
                style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
            >
                {title}
            </div>
        </div>
    )
}

export default TopBar;
