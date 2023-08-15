interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UserRoleIconInActive: React.FC<Props> = ({
    fill = 'none',
    width = 19,
    height = 18,
    stroke = '#645E5E',
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
            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M9.703 2.204a3.556 3.556 0 110 4.704M12.37 17H1.703v-.889a5.333 5.333 0 0110.667 0V17zm0 0h5.333v-.889a5.333 5.333 0 00-8-4.62m.889-6.935a3.556 3.556 0 11-7.111 0 3.556 3.556 0 017.111 0z"
            />

        </svg>
    </div>
);

export default UserRoleIconInActive;
