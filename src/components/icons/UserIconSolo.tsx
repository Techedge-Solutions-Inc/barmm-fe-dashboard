interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UserIconSolo: React.FC<Props> = ({
    fill = 'none',
    width = 16,
    height = 20,
    stroke = '#fff',
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
                d="M11.74 4.905a3.905 3.905 0 11-7.81 0 3.905 3.905 0 017.81 0zM7.834 12.166A6.834 6.834 0 001 19h13.669a6.834 6.834 0 00-6.835-6.834z"
            ></path>

        </svg>
    </div>
);

export default UserIconSolo;
