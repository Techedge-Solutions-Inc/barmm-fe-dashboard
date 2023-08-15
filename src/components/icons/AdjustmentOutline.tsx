interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const AdjustmentOutline: React.FC<Props> = ({
    fill = 'none',
    width = 20,
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
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 3.25V1m0 2.25a2.25 2.25 0 100 4.5m0-4.5a2.25 2.25 0 010 4.5m0 0V19m-6.75-2.25a2.25 2.25 0 000-4.5m0 4.5a2.25 2.25 0 010-4.5m0 4.5V19m0-6.75V1m13.5 15.75a2.25 2.25 0 000-4.5m0 4.5a2.25 2.25 0 010-4.5m0 4.5V19m0-6.75V1"
                
            />

        </svg>
    </div>
);

export default AdjustmentOutline;
