interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const ClockIcon: React.FC<Props> = ({
    fill = '#6D6D6D',
    width = 21,
    height = 21,
    stroke = '',
    strokeWidth = '',
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox="0 0 21 21"
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                fill={fill}
                fillRule="evenodd"
                d="M10.268 20.5a10 10 0 100-20 10 10 0 000 20zm1.25-15a1.25 1.25 0 00-2.5 0v5c0 .332.131.65.366.884l3.535 3.536a1.25 1.25 0 001.769-1.769l-3.17-3.168V5.5z"
                clipRule="evenodd"
            />

        </svg>
    </div>
);

export default ClockIcon;
