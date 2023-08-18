interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const DownloadIcon: React.FC<Props> = ({
    fill = 'none',
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

            <path

                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M9 9V3M11 7L9.058 8.942v0a.082.082 0 01-.116 0v0L7 7M2 9v3a2 2 0 002 2h10a2 2 0 002-2V9"
            />

        </svg>
    </div>
);

export default DownloadIcon;
