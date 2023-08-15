interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const FileIcon: React.FC<Props> = ({
    fill = 'none',
    width = 28,
    height = 34,
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
                d="M9 17.244h10M9 23.911h10m3.334 8.333H5.667a3.333 3.333 0 01-3.333-3.333V5.577a3.333 3.333 0 013.333-3.333h9.31c.442 0 .866.176 1.178.488l9.024 9.024c.313.313.488.736.488 1.178v15.977a3.333 3.333 0 01-3.333 3.333z"

            />

        </svg>
    </div>
);

export default FileIcon;
