interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UserCircleOutline: React.FC<Props> = ({
    fill = 'none',
    width = 19,
    height = 18,
    stroke = '#736F6F',
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
                d="M3.385 14.16A12.388 12.388 0 019.5 12.555c2.222 0 4.308.582 6.115 1.603m-3.448-6.937a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0zM17.5 9A7.999 7.999 0 111.502 9 7.999 7.999 0 0117.5 9z"


            />

        </svg>
    </div>
);

export default UserCircleOutline;
