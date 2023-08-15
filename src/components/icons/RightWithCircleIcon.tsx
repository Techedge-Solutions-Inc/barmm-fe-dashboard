interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const LeftWithCircleIcon: React.FC<Props> = ({
    fill = 'none',
    width = 19,
    height = 18,
    stroke = '#767676',
    strokeWidth = 2,
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox="0 0 19 18"
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >
            <path
                stroke={stroke}
                strokeWidth={strokeWidth}
                d="M17.5 9a8 8 0 11-16 0 8 8 0 0116 0z"
            />

            <path
                d="M10.389 6.334L7.955 8.767v0a.33.33 0 000 .467v0l2.434 2.433"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

export default LeftWithCircleIcon;
