interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const NotifCheck: React.FC<Props> = ({
    fill = 'none',
    width = 21,
    height = 21,
    stroke = '#408944',
    strokeWidth = 2,
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M7.75 10.837l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>

        </svg>
    </div>
);

export default NotifCheck;
