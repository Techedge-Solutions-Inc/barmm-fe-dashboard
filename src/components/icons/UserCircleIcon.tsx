interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UserCircleIcon: React.FC<Props> = ({
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M5.396 28.119a24.777 24.777 0 0112.229-3.207c4.444 0 8.617 1.164 12.23 3.207m-6.897-13.874a5.333 5.333 0 11-10.667 0 5.333 5.333 0 0110.667 0zm10.667 3.556A16.001 16.001 0 016.311 29.115 16 16 0 1133.625 17.8z"
            />

        </svg>
    </div>
);

export default UserCircleIcon;
