interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UploadIcon: React.FC<Props> = ({
    fill = 'none',
    width = 18,
    height = 19,
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


            <g
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            >
                <path d="M9 3.5v6"></path>
                <path d="M7 5.5l1.942-1.942v0a.082.082 0 01.116 0v0L11 5.5"></path>
                <path d="M2 9.5v3a2 2 0 002 2h10a2 2 0 002-2v-3"></path>
            </g>
        </svg>

    </div >
);

export default UploadIcon;
