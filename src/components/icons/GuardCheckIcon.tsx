interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const GuardCheckIcon: React.FC<Props> = ({
    fill = 'none',
    width = 30,
    height = 30,
    stroke = '#4E4E4E',
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
                d="M28.243 6.252a18.035 18.035 0 01-13-4.586 18.035 18.035 0 01-13 4.586 18.133 18.133 0 00-.576 4.55c0 8.434 5.769 15.522 13.576 17.531 7.808-2.01 13.577-9.097 13.577-17.531 0-1.572-.2-3.096-.577-4.55z"
            ></path>
            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                d="M19.627 11.213L12.88 17.96 10 15.08"
            ></path>



        </svg>
    </div>
);

export default GuardCheckIcon;
