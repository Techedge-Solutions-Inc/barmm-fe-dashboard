interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const CloseIconCircle: React.FC<Props> = ({
    fill = '#CD1A1A',
    width = 18,
    height = 18,
    stroke = '#fff',
    strokeWidth = 1.5,
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

            <rect width={width} height={height} fill={fill} rx="9"></rect>
            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                d="M12 6l-6 6M12 12L6 6"
            ></path>

        </svg>
    </div>
);

export default CloseIconCircle;
