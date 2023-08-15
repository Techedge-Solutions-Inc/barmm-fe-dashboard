interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const ArchiveOutlineIcon: React.FC<Props> = ({
    fill = 'none',
    width = 38,
    height = 34,
    stroke = '#fff',
    strokeWidth = 3,
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox={`0 0 ${width} ${height}`}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.875 9.744h26.25m-26.25 0a3.75 3.75 0 010-7.5h26.25a3.75 3.75 0 110 7.5m-26.25 0v18.75a3.75 3.75 0 003.75 3.75h18.75a3.75 3.75 0 003.75-3.75V9.744m-16.875 7.5h7.5"
            />

        </svg>
    </div>
);

export default ArchiveOutlineIcon;
