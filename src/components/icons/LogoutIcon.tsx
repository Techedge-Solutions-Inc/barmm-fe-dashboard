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

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox="0 0 21 18"
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                d="M15.5 13l4-4m0 0l-4-4m4 4h-14m6 4v1a3 3 0 01-3 3h-4a3 3 0 01-3-3V4a3 3 0 013-3h4a3 3 0 013 3v1"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

export default LogoutIcon;
