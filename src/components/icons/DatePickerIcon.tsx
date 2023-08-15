interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const DatePickerIcon: React.FC<Props> = ({
    fill = '#736F6F',
    width = 13,
    height = 13,
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
                fillRule="evenodd"
                fill={fill}
                d="M3.25.152a.75.75 0 00-.75.75v.75h-.75a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H10v-.75a.75.75 0 10-1.5 0v.75H4v-.75a.75.75 0 00-.75-.75zm0 3.75a.75.75 0 000 1.5h6a.75.75 0 100-1.5h-6z"
                clipRule="evenodd"
            />

        </svg>
    </div>
);

export default DatePickerIcon;
