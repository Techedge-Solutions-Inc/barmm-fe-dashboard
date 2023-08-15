interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const ClockOutlineIcon: React.FC<Props> = ({
    fill = 'none',
    width = 36,
    height = 36,
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
                d="M18 10.524v7.11l5.333 5.334M34 17.635A16.001 16.001 0 016.686 28.948 16 16 0 1134 17.636z"
            />

        </svg>
    </div>
);

export default ClockOutlineIcon;
