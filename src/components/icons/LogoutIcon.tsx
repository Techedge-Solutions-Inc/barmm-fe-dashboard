interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const LogoutIcon: React.FC<Props> = ({
    fill = 'none',
    width = 21,
    height = 18,
    stroke = '#3D3D3D',
    strokeWidth = 2,
    className = '',
    ...rest
}) => (

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
    >
        <path
        stroke="#4E4E4E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.444 12.5 17 9m0 0-3.556-3.5M17 9H4.556m5.333 4.5v.875c0 1.45-1.194 2.625-2.667 2.625H3.667C2.194 17 1 15.825 1 14.375V3.625C1 2.175 2.194 1 3.667 1h3.555C8.695 1 9.89 2.175 9.89 3.625V4.5"
        />
    </svg>
);

export default LogoutIcon;
